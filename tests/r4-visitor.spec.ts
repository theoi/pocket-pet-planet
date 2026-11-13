import { expect, test, type Page } from '@playwright/test';
import { freshStart, ready, savedGame, seedSave, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const vis = (page: Page) => page.evaluate(() => (window as any).__ppp.visitor()) as Promise<any>;
const diary = (page: Page) => page.evaluate(() => (window as any).__ppp.diary()) as Promise<{ text: string }[]>;

/** Tap/click the visitor until its shop opens (a pet may wander in front; pets win ties). */
export async function openShop(page: Page, touch = false) {
  await expect.poll(async () => (await vis(page)).state, { timeout: 45_000 }).toBe('here');
  for (let i = 0; i < 10 && !(await page.locator('#shop').isVisible()); i++) {
    const v = await vis(page);
    if (touch) await page.touchscreen.tap(v.screen.x, v.screen.y);
    else await page.mouse.click(v.screen.x, v.screen.y);
    await page.waitForTimeout(400);
    if (await page.locator('#panel').isVisible()) await page.click('#close');
  }
  await expect(page.locator('#shop')).toBeVisible();
}

test('Twinkle lands on a visitor night, trades snacks for a rare outfit, and appears in the diary and sticker book', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=22:30&weather=clear&date=2026-11-03');
  const s = await savedGame(page);
  await seedSave(page, { ...s, savedAt: Date.now(), snacks: 10 });
  await page.goto('?time=22:30&weather=clear&date=2026-11-03&visitor=1');
  await ready(page);
  await expect(page.locator('#toast')).toContainText('A shooting star! Twinkle', { timeout: 15_000 });
  await openShop(page);
  await expect(page.locator('#shopSnacks')).toHaveText('10');
  await expect(page.locator('.ware')).toHaveCount(4);
  await expect(page.locator('.ware[data-ware="moonhalo"] button')).toBeDisabled(); // 12 > 10
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SHOTS}/r4-visitor-shop.png` });
  await page.click('.ware[data-ware="stardust"] button');
  await expect(page.locator('#toast')).toContainText('Got the Stardust scarf');
  await expect(page.locator('#shopSnacks')).toHaveText('2');
  await expect(page.locator('.ware[data-ware="stardust"] button')).toHaveText('Owned ✓');
  await page.click('.ware[data-ware="seed:sunpeach"] button');
  expect((await page.evaluate(() => (window as any).__ppp.garden())).seeds.sunpeach).toBe(1);
  await expect(page.locator('#snackCount')).toHaveText('0');
  await page.click('#shopClose');

  // Wear it.
  const pet = await selectVisiblePet(page);
  await page.click('#wearBtn');
  await page.click('#wardrobeItems .chip[data-id="stardust"]');
  await expect(page.locator('#wardrobeItems .chip[data-id="cometcap"]')).toBeDisabled();
  await expect(page.locator('#wardrobeItems .chip[data-id="cometcap"]')).toHaveAttribute('title', 'Sold by a visitor on special nights');
  const saved = await savedGame(page);
  expect(saved.outfits).toContain('stardust');
  expect(saved.pets.find((p: any) => p.id === pet.id).wear.neck).toBe('stardust');
  await page.click('#close');

  const texts = (await diary(page)).map((e) => e.text);
  expect(texts).toEqual(expect.arrayContaining(['A shooting star brought Twinkle the star peddler to the planet', 'Traded 8 snacks with Twinkle for a Stardust scarf', 'Traded 2 snacks with Twinkle for a sunpeach seed']));
  await page.click('#dexBtn');
  await expect(page.locator('#dexGuests .sticker.found .n')).toHaveText('Twinkle the star peddler');
  await expect(page.locator('#dexCount')).toHaveText('4/24'); // a bonus sticker, outside the 24
  await page.click('#dexClose');
  await page.screenshot({ path: `${SHOTS}/r4-visitor-night.png` });

  // A reload the same night: Twinkle is still here (no second arrival).
  await page.reload();
  await ready(page);
  await expect.poll(async () => (await vis(page)).state, { timeout: 30_000 }).toBe('here');
  expect((await diary(page)).filter((e) => e.text.startsWith('A shooting star')).length).toBe(1);
  expect(errors).toEqual([]);
});

test('Twinkle leaves at dawn, writes a goodbye page, and does not come back the same night', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  // Real clock (no ?time): 23:00 on a visitor night (?visitor=1), then the clock jumps to dawn.
  await page.clock.setFixedTime(new Date(2026, 10, 3, 23, 0));
  await freshStart(page, '?weather=clear&date=2026-11-03&visitor=1');
  await expect.poll(async () => (await vis(page)).state, { timeout: 45_000 }).toBe('here');
  expect((await vis(page)).night).toBe('2026-11-03');
  await page.clock.setFixedTime(new Date(2026, 10, 4, 6, 40));
  await expect.poll(async () => (await vis(page)).state, { timeout: 45_000 }).toBe('none');
  expect((await diary(page)).map((e) => e.text)).toContain('Twinkle waved goodbye and flew home at dawn');
  expect((await savedGame(page)).visits['2026-11-03'].left).toBe(true);
  // Back to night: same night key, so Twinkle stays home.
  await page.clock.setFixedTime(new Date(2026, 10, 4, 4, 0));
  await page.reload();
  await ready(page);
  await page.waitForTimeout(4000);
  expect((await vis(page)).state).toBe('none');
  expect(errors).toEqual([]);
});

test('no visitor by day, in the rain, or on an ordinary night; festival nights always bring one', async ({ page }) => {
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03&visitor=1');
  await page.waitForTimeout(3500);
  expect((await vis(page)).state).toBe('none');
  await page.goto('?time=22:30&weather=rain&date=2026-11-03&visitor=1');
  await ready(page);
  await page.waitForTimeout(3500);
  expect((await vis(page)).state).toBe('none');
  await page.goto('?time=22:30&weather=clear&date=2026-11-03&visitor=0');
  await ready(page);
  await page.waitForTimeout(3500);
  expect((await vis(page)).state).toBe('none');
  // The Lantern Festival is on Nov 13: a visitor night without any override.
  await page.clock.setFixedTime(new Date(2026, 10, 13, 22, 0));
  await page.goto('?weather=clear');
  await ready(page);
  await expect.poll(async () => (await vis(page)).state, { timeout: 45_000 }).not.toBe('none');
});
