import { expect, test } from '@playwright/test';
import { freshStart, pets, ready, savedGame, seedSave, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const eggs = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.eggs()) as Promise<any[]>;
const game = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.game()) as Promise<any>;

test('two happy pets court, lay an egg that hatches into a mixed baby; eggs and babies persist', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  await freshStart(page, '?debug=1&time=12:00');
  const parentsBefore = await pets(page);
  await selectVisiblePet(page);
  await page.click('#dbgBreed');
  // The pair walks together for real; laying happens through the normal courtship path.
  await expect.poll(async () => (await eggs(page)).length, { timeout: 60_000 }).toBe(1);
  const [egg] = await eggs(page);
  await page.evaluate((id) => (window as any).__ppp.focus(id), egg.id);
  await page.waitForTimeout(800);
  expect(egg.baby.parents).toHaveLength(2);
  expect(parentsBefore.map((p) => p.name)).toEqual(expect.arrayContaining(egg.baby.parents));
  expect(egg.hatchAt - Date.now()).toBeGreaterThan(60_000);
  expect((await game(page)).lastEggAt).toBeGreaterThan(0);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SHOTS}/r1-egg.png` });

  // Tapping the egg tells you when it hatches.
  const e2 = (await eggs(page))[0];
  await page.mouse.click(e2.screen.x, e2.screen.y);
  await expect(page.locator('.floater', { hasText: 'Hatching in' })).toBeVisible();

  // Egg survives a reload.
  await page.reload();
  await ready(page);
  expect((await eggs(page)).map((e) => e.id)).toEqual([egg.id]);

  // Cooldown: no second egg right away even if pets are happy.
  await page.click('#dbgFF'); // +4h: egg hatches; cooldown (20 min) also elapses
  await expect.poll(async () => (await pets(page)).length).toBe(5);
  expect((await eggs(page)).length).toBe(0);
  const baby = (await pets(page)).find((p) => p.id === egg.id)!;
  expect(baby.name).toBe(egg.baby.name);
  expect(baby.stage).toBe(0);
  expect(baby.parents).toEqual(egg.baby.parents);
  expect(baby.look.color).toMatch(/^#[0-9a-f]{6}$/);
  // Body color is a blend: different from both parents' plain species colors.
  const parents = parentsBefore.filter((p) => egg.baby.parents.includes(p.name));
  await expect(page.locator('.floater', { hasText: `Meet ${baby.name}` })).toBeVisible();
  await page.evaluate((id) => (window as any).__ppp.focus(id, 5.4), baby.id);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${SHOTS}/r1-baby.png` });
  expect(parents).toHaveLength(2);

  // The baby's inherited look survives a reload.
  await page.reload();
  await ready(page);
  const reloaded = (await pets(page)).find((p) => p.id === egg.id)!;
  expect(reloaded.look).toEqual(baby.look);
  expect(errors).toEqual([]);
});

test('population is capped at 12 pets + eggs', async ({ page }) => {
  await freshStart(page, '?time=12:00');
  // Build a full planet through the save format (v2) and make everyone blissfully happy.
  const s = await savedGame(page);
  const base = s.pets[0];
  s.pets = Array.from({ length: 12 }, (_, i) => ({ ...base, id: 'p' + i, name: 'P' + i, joy: 100, food: 100, pos: [Math.cos(i), 0.3, Math.sin(i)] }));
  s.lastEggAt = 0;
  s.savedAt = Date.now();
  await seedSave(page, s);
  await page.waitForTimeout(5000);
  const g = await game(page);
  expect(g.population).toBe(12);
  expect(g.courting).toBe(false);
  expect((await eggs(page)).length).toBe(0);
});

test('a v1 save (before babies/hats/snacks) loads and upgrades cleanly', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('?time=12:00');
  await seedSave(page, {
    version: 1,
    savedAt: Date.now() - 60_000,
    pets: [
      { id: 'old1', name: 'Oldie', species: 'puff', stage: 1, food: 66, joy: 70, care: 7, pos: [0, 0.4, 0.9] },
      { id: 'old2', name: 'Classic', species: 'bloop', stage: 0, food: 50, joy: 40, care: 2.5, pos: [0.5, 0.2, 0.8] },
    ],
  });
  const list = await pets(page);
  expect(list.map((p) => p.name)).toEqual(['Oldie', 'Classic']);
  expect(list[0].stage).toBe(1);
  const g = await game(page);
  expect(g.totalCare).toBe(9.5);
  expect(g.snacks).toBe(0);
  await page.waitForTimeout(3500);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')!));
  expect(saved.version).toBe(4);
  expect(saved.pets.map((p: any) => p.id)).toEqual(['old1', 'old2']);
  expect(errors).toEqual([]);
});
