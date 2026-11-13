import { expect, test, type Page } from '@playwright/test';
import { freshStart, SHOTS, trackErrors } from './helpers';

const mini = (page: Page) => page.evaluate(() => (window as any).__ppp.minigame()) as Promise<any>;

test('phone: fruit catch is played by dragging a finger', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00');
  await page.tap('#playBtn');
  await page.tap('#gameStart');
  const vp = page.viewportSize()!;
  const cdp = await page.context().newCDPSession(page);
  const y = vp.height - 120;
  const point = (x: number) => [{ x, y, id: 0, radiusX: 4, radiusY: 4, force: 1 }];
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: point(vp.width / 2) });
  let shot = false;
  for (let i = 0; i < 1200; i++) {
    const s = await mini(page);
    if (!s || s.phase === 'done') break;
    const next = s.fruits.filter((f: any) => f.y < s.catchY).sort((a: any, b: any) => b.y - a.y)[0];
    if (next) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: point(next.x) });
    if (!shot && s.caught >= 3) {
      await page.screenshot({ path: `${SHOTS}/r1-minigame-mobile.png` });
      shot = true;
    }
    await page.waitForTimeout(30);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  const s = await mini(page);
  expect(s.phase).toBe('done');
  expect(s.caught).toBeGreaterThanOrEqual(5);
  await page.tap('#gameDone');
  await expect(page.locator('#snackCount')).toHaveText(String(s.reward));
  // The game card fits on a phone.
  expect(errors).toEqual([]);
});
