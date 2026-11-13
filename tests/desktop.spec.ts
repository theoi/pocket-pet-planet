import { expect, test } from '@playwright/test';
import { angle, cameraPos, freshStart, pets, ready, selectedId, selectVisiblePet, SHOTS, trackErrors } from './helpers';

test('loads with no console errors and shows the planet with pets', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page);
  await page.waitForTimeout(2000);
  await expect(page.locator('#app canvas')).toBeVisible();
  await expect(page.locator('h1')).toHaveText('Pocket Pet Planet');
  const list = await pets(page);
  expect(list.length).toBe(4);
  expect(list.filter((p) => p.visible).length).toBeGreaterThan(0);
  await page.screenshot({ path: `${SHOTS}/desktop-load.png` });
  expect(errors).toEqual([]);
});

test('dragging rotates the planet view and scrolling zooms', async ({ page }) => {
  await freshStart(page);
  const before = await cameraPos(page);
  // Start the drag on empty sky so no pet gets selected.
  await page.mouse.move(150, 400);
  await page.mouse.down();
  for (let i = 1; i <= 10; i++) await page.mouse.move(150 + i * 40, 400 + i * 5);
  await page.mouse.up();
  await page.waitForTimeout(800);
  const after = await cameraPos(page);
  expect(angle(before, after)).toBeGreaterThan(0.3);
  expect(await selectedId(page)).toBeNull();

  const d0 = Math.hypot(...after);
  await page.mouse.move(640, 400);
  for (let i = 0; i < 5; i++) await page.mouse.wheel(0, -200);
  await page.waitForTimeout(800);
  const d1 = Math.hypot(...(await cameraPos(page)));
  expect(d1).toBeLessThan(d0 - 0.5);
});

test('creatures wander on their own', async ({ page }) => {
  await freshStart(page);
  const a = await pets(page);
  await page.waitForTimeout(8000);
  const b = await pets(page);
  const moved = a.filter((p, i) => angle(p.pos, b[i].pos) > 0.03);
  expect(moved.length).toBeGreaterThanOrEqual(2);
  // They stay on the surface (unit vectors).
  for (const p of b) expect(Math.hypot(...p.pos)).toBeCloseTo(1, 3);
});

test('select, feed, rename, and the state survives reload (including offline decay)', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page);
  const pet = await selectVisiblePet(page);
  await expect(page.locator('#petName')).toHaveText(pet.name);
  await expect(page.locator('#moodLabel')).not.toBeEmpty();
  await expect(page.locator('#tag')).toHaveText(pet.name);

  const before = (await pets(page)).find((p) => p.id === pet.id)!;
  await page.click('#feedBtn');
  await expect(page.locator('.floater', { hasText: 'Yum!' })).toBeVisible();
  await page.waitForTimeout(400);
  const fed = (await pets(page)).find((p) => p.id === pet.id)!;
  expect(fed.food).toBeGreaterThan(before.food + 15);
  expect(fed.care).toBe(1);
  await page.screenshot({ path: `${SHOTS}/desktop-feed.png` });

  await page.click('#renameBtn');
  await page.fill('#renameInput', 'Sprinkles');
  await page.press('#renameInput', 'Enter');
  await expect(page.locator('#petName')).toHaveText('Sprinkles');
  await expect(page.locator('#tag')).toHaveText('Sprinkles');

  await page.click('#close');
  await expect(page.locator('#panel')).toBeHidden();

  await page.reload();
  await ready(page);
  const reloaded = (await pets(page)).find((p) => p.id === pet.id)!;
  expect(reloaded.name).toBe('Sprinkles');
  expect(reloaded.care).toBe(1);
  expect(reloaded.food).toBeGreaterThan(fed.food - 2);

  // Close the tab (it saves on pagehide), then reopen it "5 hours later" by
  // backdating the save before the app boots: needs drop by ~5/h while away.
  const context = page.context();
  await page.close();
  const later = await context.newPage();
  const laterErrors = trackErrors(later);
  await later.addInitScript(() => {
    if (sessionStorage.getItem('backdated')) return;
    sessionStorage.setItem('backdated', '1');
    const key = 'pocket-pet-planet:v1';
    const s = JSON.parse(localStorage.getItem(key)!);
    (window as any).__savedFood = s.pets.find((p: any) => p.name === 'Sprinkles').food;
    s.savedAt -= 5 * 3600_000;
    localStorage.setItem(key, JSON.stringify(s));
  });
  await later.goto('');
  await ready(later);
  const savedFood = await later.evaluate(() => (window as any).__savedFood as number);
  const away = (await pets(later)).find((p) => p.id === pet.id)!;
  expect(away.food).toBeLessThan(savedFood - 20);
  expect(away.food).toBeGreaterThan(savedFood - 30);
  expect(away.name).toBe('Sprinkles');
  await expect(later.locator('#hint')).toContainText('Welcome back');
  expect(errors).toEqual([]);
  expect(laterErrors).toEqual([]);
});

test('enough care evolves a creature (debug fast-forward)', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?debug=1');
  await expect(page.locator('#debug')).toBeVisible();
  const pet = await selectVisiblePet(page);
  await expect(page.locator('#petForm')).toContainText('Baby');

  for (let i = 0; i < 5; i++) {
    await page.click('#dbgFF'); // +4h: pet gets peckish, so feeding counts as care
    await page.click('#feedBtn');
    await page.waitForTimeout(650);
  }
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${SHOTS}/desktop-evolving.png` });
  await expect.poll(async () => (await pets(page)).find((p) => p.id === pet.id)!.stage).toBe(1);
  await expect(page.locator('#petForm')).toContainText('Young');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${SHOTS}/desktop-evolved.png` });

  // Overfeeding is refused and gives no care.
  const care = (await pets(page)).find((p) => p.id === pet.id)!.care;
  await page.click('#feedBtn');
  await page.click('#feedBtn');
  await expect(page.locator('.floater', { hasText: 'Too full!' }).first()).toBeVisible();
  expect((await pets(page)).find((p) => p.id === pet.id)!.care).toBeLessThanOrEqual(care + 1);

  await page.click('#dbgEvolve');
  await expect.poll(async () => (await pets(page)).find((p) => p.id === pet.id)!.stage).toBe(2);
  await page.waitForTimeout(2200);
  await expect(page.locator('#petForm')).toContainText('Starry');
  await page.screenshot({ path: `${SHOTS}/desktop-starry.png` });

  await page.reload();
  await ready(page);
  expect((await pets(page)).find((p) => p.id === pet.id)!.stage).toBe(2);
  expect(errors).toEqual([]);
});

test('debug tools are hidden without ?debug', async ({ page }) => {
  await freshStart(page);
  await expect(page.locator('#debug')).toBeHidden();
  expect(await page.evaluate(() => typeof (window as any).__ppp.fastForward)).toBe('undefined');
});
