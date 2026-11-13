import { expect, test, type Page } from '@playwright/test';
import { angle, cameraPos, freshStart, pets, ready, selectedId, selectVisiblePet, SHOTS, trackErrors } from './helpers';

type Pt = { x: number; y: number };

async function touchGesture(page: Page, from: Pt[], to: Pt[], steps = 10) {
  const cdp = await page.context().newCDPSession(page);
  const pts = (k: number) =>
    from.map((f, i) => ({ x: f.x + (to[i].x - f.x) * k, y: f.y + (to[i].y - f.y) * k, id: i, radiusX: 2, radiusY: 2, force: 1 }));
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pts(0) });
  for (let s = 1; s <= steps; s++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pts(s / steps) });
    await page.waitForTimeout(16);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}

test('phone: loads, one-finger drag rotates, pinch zooms, tap selects and feeds', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${SHOTS}/mobile-load.png` });

  const c0 = await cameraPos(page);
  await touchGesture(page, [{ x: 60, y: 700 }], [{ x: 330, y: 640 }]);
  await page.waitForTimeout(800);
  const c1 = await cameraPos(page);
  expect(angle(c0, c1)).toBeGreaterThan(0.3);
  expect(await selectedId(page)).toBeNull();

  const d1 = Math.hypot(...c1);
  await touchGesture(page, [{ x: 150, y: 420 }, { x: 240, y: 420 }], [{ x: 40, y: 420 }, { x: 350, y: 420 }]);
  await page.waitForTimeout(800);
  const d2 = Math.hypot(...(await cameraPos(page)));
  expect(d2).toBeLessThan(d1 - 0.5);
  // Pinch back out so the whole planet is in view again.
  await touchGesture(page, [{ x: 60, y: 420 }, { x: 330, y: 420 }], [{ x: 180, y: 420 }, { x: 210, y: 420 }]);
  await touchGesture(page, [{ x: 60, y: 420 }, { x: 330, y: 420 }], [{ x: 180, y: 420 }, { x: 210, y: 420 }]);
  await page.waitForTimeout(800);
  expect(Math.hypot(...(await cameraPos(page)))).toBeGreaterThan(d2 + 1);

  const pet = await selectVisiblePet(page, true);
  await expect(page.locator('#petName')).toHaveText(pet.name);
  const food0 = (await pets(page)).find((p) => p.id === pet.id)!.food;
  await page.tap('#feedBtn');
  await expect(page.locator('.floater', { hasText: 'Yum!' })).toBeVisible();
  expect((await pets(page)).find((p) => p.id === pet.id)!.food).toBeGreaterThan(food0 + 15);
  await page.screenshot({ path: `${SHOTS}/mobile-feed.png` });

  await page.tap('#renameBtn');
  await page.fill('#renameInput', 'Pocket');
  await page.tap('#renameForm button');
  await expect(page.locator('#petName')).toHaveText('Pocket');
  // The panel fits the phone screen.
  const box = (await page.locator('#panel').boundingBox())!;
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);

  await page.reload();
  await ready(page);
  expect((await pets(page)).find((p) => p.id === pet.id)!.name).toBe('Pocket');
  expect(errors).toEqual([]);
});
