import { expect, test } from '@playwright/test';
import { freshStart, pets, ready, savedGame, seedSave, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const dex = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.dex()) as Promise<Record<string, any>>;

test('fresh planet: the 4 starter forms are in the book, the rest are silhouettes', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear');
  const d = await dex(page);
  expect(Object.keys(d).sort()).toEqual(['form:bloop:0', 'form:mochi:0', 'form:puff:0', 'form:sprout:0']);
  await expect(page.locator('#dexCount')).toHaveText('4/24');
  await page.waitForTimeout(1500);
  await expect(page.locator('#toast')).not.toContainText('sticker');
  await page.click('#dexBtn');
  await expect(page.locator('#dex')).toBeVisible();
  await expect(page.locator('#dexProgress')).toHaveText('4 / 24 stickers');
  await expect(page.locator('.sticker.found')).toHaveCount(4);
  await expect(page.locator('.sticker.locked')).toHaveCount(20);
  await expect(page.locator('#dexMixes .sticker')).toHaveCount(12);
  const found = page.locator('.sticker[data-id="form:puff:0"]');
  await expect(found.locator('.n')).toHaveText('Baby Puff');
  await expect(found.locator('.m')).toContainText(/Found .* · (Blossom Meadow|Mushroom Glade|Pebble Shore|Lantern Hollow|Frosty North|Southern Burrows) · by /);
  await expect(page.locator('.sticker[data-id="form:puff:1"] .n')).toHaveText('???');
  // Portraits are real images (die-cut sticker vs grey silhouette).
  const srcs = await page.locator('.sticker img').evaluateAll((els) => els.map((e) => (e as HTMLImageElement).src));
  expect(srcs.every((s) => s.startsWith('data:image/png'))).toBe(true);
  const foundSrcs = await page.locator('.sticker.found img').evaluateAll((els) => els.map((e) => (e as HTMLImageElement).src));
  expect(new Set(foundSrcs).size).toBe(4);
  expect(srcs.filter((s) => foundSrcs.includes(s))).toHaveLength(4); // silhouettes never reuse a revealed portrait
  await page.screenshot({ path: `${SHOTS}/r3-dex.png` });
  await page.keyboard.press('Escape');
  await expect(page.locator('#dex')).toBeHidden();
  expect(errors).toEqual([]);
});

test('evolving and hatching discover new stickers with a toast; discoveries persist', async ({ page }) => {
  test.setTimeout(120_000);
  await freshStart(page, '?debug=1&time=12:00&weather=clear');
  const pet = await selectVisiblePet(page);
  await page.click('#dbgEvolve');
  await expect(page.locator('#toast')).toContainText('New sticker');
  const d = await dex(page);
  const id = Object.keys(d).find((k) => k.endsWith(':1'))!;
  expect(id).toBe(`form:${(await pets(page)).find((p) => p.id === pet.id)!.species}:1`);
  expect(d[id].by).toBe(pet.name);
  expect(d[id].backfilled).toBeUndefined();
  await expect(page.locator('#dexCount')).toHaveText('5/24');
  await page.click('#dexBtn');
  await expect(page.locator(`.sticker.new[data-id="${id}"]`)).toBeVisible();
  await page.click('#dexClose');
  await page.reload();
  await ready(page);
  expect(Object.keys(await dex(page))).toContain(id);
});

test('baby trait mixes are discovered when one hatches', async ({ page }) => {
  await freshStart(page, '?time=12:00&weather=clear');
  const s = await savedGame(page);
  s.eggs = [{ id: 'egg1', pos: s.pets[0].pos, hatchAt: Date.now() + 2500, baby: { name: 'Mixy', species: 'puff', look: { color: '#ffd6e0', feature: 'mochi' }, parents: ['A', 'B'] } }];
  s.savedAt = Date.now();
  await seedSave(page, s);
  await expect.poll(async () => Object.keys(await dex(page)), { timeout: 15_000 }).toContain('mix:puff+mochi');
  await expect(page.locator('#toast')).toContainText('Puff with bunny ears', { timeout: 12_000 });
  expect((await dex(page))['mix:puff+mochi'].by).toBe('Mixy');
});

test('older saves are backfilled quietly (no toast) and upgraded to v3', async ({ page }) => {
  await page.goto('?time=12:00&weather=clear');
  await seedSave(page, {
    version: 2,
    savedAt: Date.now() - 60_000,
    pets: [
      { id: 'a', name: 'Starry', species: 'bloop', stage: 2, food: 70, joy: 70, care: 20, pos: [0, 0.3, 0.95] },
      { id: 'b', name: 'Mix', species: 'mochi', stage: 0, food: 70, joy: 70, care: 0, pos: [0.3, 0.2, 0.9], look: { color: '#ffd0e0', feature: 'sprout' } },
    ],
    eggs: [],
    snacks: 3,
    totalCare: 20,
    lastEggAt: 0,
  });
  const d = await dex(page);
  expect(Object.keys(d).sort()).toEqual(['form:bloop:0', 'form:bloop:1', 'form:bloop:2', 'form:mochi:0', 'mix:mochi+sprout']);
  expect(Object.values(d).every((x: any) => x.backfilled)).toBe(true);
  await page.waitForTimeout(1500);
  await expect(page.locator('#toast')).not.toContainText('sticker');
  await page.click('#dexBtn');
  await expect(page.locator('.sticker[data-id="form:bloop:2"] .m')).toContainText('Recorded');
  await page.screenshot({ path: `${SHOTS}/r3-dex-backfilled.png` });
  await page.waitForTimeout(3500);
  expect((await savedGame(page)).version).toBe(4);
});
