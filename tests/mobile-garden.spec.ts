import { expect, test } from '@playwright/test';
import { decor, freshStart, ready, SHOTS, trackErrors, validSpots } from './helpers';

const garden = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.garden()) as Promise<{ seeds: Record<string, number>; plots: any[] }>;

test('phone: place a plot, plant and water by touch, harvest after two (skipped) days', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  await page.tap('#decoBtn');
  await page.tap('.chip[data-kind="plot"]');
  const [s1] = await validSpots(page);
  await page.touchscreen.tap(s1.x, s1.y);
  await expect.poll(async () => (await decor(page)).length).toBe(1);
  await page.tap('#decoDone');
  const tapPlot = async () => {
    const p = (await garden(page)).plots[0];
    await page.evaluate((pos) => (window as any).__ppp.focus(pos, 8), p.pos ?? (await decor(page))[0].pos);
    await page.waitForTimeout(600);
    // A pet wandering in front of the plot takes the tap (pets come first), so try again once it has moved on.
    for (let i = 0; i < 10 && !(await page.locator('#plotCard').isVisible()); i++) {
      const q = (await garden(page)).plots[0];
      await page.touchscreen.tap(q.screen.x, q.screen.y);
      await page.waitForTimeout(500);
      if (await page.locator('#panel').isVisible()) await page.tap('#close');
    }
    await expect(page.locator('#plotCard')).toBeVisible();
    await page.waitForTimeout(500);
    const b = (await page.locator('#plotCard').boundingBox())!;
    expect(b.y).toBeGreaterThanOrEqual(0);
    expect(b.y + b.height).toBeLessThanOrEqual(844);
  };
  await tapPlot();
  await page.locator('#plotSeeds .chip[data-seed="blueberry"]').tap();
  await page.tap('#plotWater');
  await expect(page.locator('#plotWater')).toHaveText('💧 Watered');
  await page.screenshot({ path: `${SHOTS}/r4-garden-mobile.png` });
  await page.tap('#plotClose');
  await expect(page.locator('#plotCard')).toBeHidden();
  await page.goto('?time=12:00&weather=clear&date=2026-11-03&gardenSkip=48');
  await ready(page);
  await tapPlot();
  await expect(page.locator('#plotStage')).toHaveText('Ripe!');
  await page.tap('#plotHarvest');
  await expect(page.locator('#snackCount')).toHaveText('2');
  expect(errors).toEqual([]);
});
