import { expect, test } from '@playwright/test';
import { angle, cameraPos, decor, freshStart, ready, SHOTS, trackErrors, validSpots } from './helpers';

test('phone: decorate by touch — tap to place, drag with a finger to move, remove', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  await page.tap('#decoBtn');
  await page.tap('.chip[data-kind="cottage"]');
  const [s1] = await validSpots(page);
  await page.touchscreen.tap(s1.x, s1.y);
  await expect.poll(async () => (await decor(page)).length).toBe(1);
  const pond = (await page.evaluate(() => (window as any).__ppp.ponds())).find((p: any) => p.visible && p.screen.y < 600);
  if (pond) {
    await page.touchscreen.tap(pond.screen.x, pond.screen.y);
    await expect(page.locator('#decoHint')).toContainText('pond');
    expect((await decor(page)).length).toBe(1);
  }
  await page.tap('.chip[data-kind="cottage"]'); // stop placing

  const before = (await decor(page))[0];
  const [s2] = await validSpots(page, [before.screen], 90);
  const cam0 = await cameraPos(page);
  const cdp = await page.context().newCDPSession(page);
  const pt = (x: number, y: number) => [{ x, y, id: 0, radiusX: 3, radiusY: 3, force: 1 }];
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(before.screen.x, before.screen.y) });
  for (let i = 1; i <= 12; i++)
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(before.screen.x + ((s2.x - before.screen.x) * i) / 12, before.screen.y + ((s2.y - before.screen.y) * i) / 12) });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(page.locator('#decoHint')).toHaveText('Moved!');
  const after = (await decor(page))[0];
  expect(angle(before.pos, after.pos)).toBeGreaterThan(0.06);
  expect(angle(cam0, await cameraPos(page))).toBeLessThan(0.01);
  await page.screenshot({ path: `${SHOTS}/r3-decorate-mobile.png` });

  await page.reload();
  await ready(page);
  expect((await decor(page)).length).toBe(1);
  await page.tap('#decoBtn');
  const d = (await decor(page))[0];
  await page.touchscreen.tap(d.screen.x, d.screen.y);
  await page.tap('#decoRemove');
  expect((await decor(page)).length).toBe(0);
  expect(errors).toEqual([]);
});
