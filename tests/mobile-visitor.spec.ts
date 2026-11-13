import { expect, test } from '@playwright/test';
import { freshStart, ready, savedGame, seedSave, SHOTS, trackErrors } from './helpers';

const vis = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.visitor()) as Promise<any>;

test('phone: tap Twinkle and buy a Comet cap by touch', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=22:30&weather=clear&date=2026-11-03');
  await seedSave(page, { ...(await savedGame(page)), savedAt: Date.now(), snacks: 7 });
  await page.goto('?time=22:30&weather=clear&date=2026-11-03&visitor=1');
  await ready(page);
  await expect.poll(async () => (await vis(page)).state, { timeout: 45_000 }).toBe('here');
  for (let i = 0; i < 10 && !(await page.locator('#shop').isVisible()); i++) {
    const v = await vis(page);
    await page.touchscreen.tap(v.screen.x, v.screen.y);
    await page.waitForTimeout(400);
    if (await page.locator('#panel').isVisible()) await page.tap('#close');
  }
  await expect(page.locator('#shop')).toBeVisible();
  await page.waitForTimeout(500);
  const box = (await page.locator('#shop').boundingBox())!;
  expect(box.y + box.height).toBeLessThanOrEqual(844);
  expect(box.x).toBeGreaterThanOrEqual(0);
  await page.locator('.ware[data-ware="cometcap"] button').tap();
  await expect(page.locator('.ware[data-ware="cometcap"] button')).toHaveText('Owned ✓');
  await expect(page.locator('#shopSnacks')).toHaveText('1');
  await page.screenshot({ path: `${SHOTS}/r4-visitor-mobile.png` });
  expect((await savedGame(page)).outfits).toContain('cometcap');
  expect(errors).toEqual([]);
});
