import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { freshStart, SHOTS, trackErrors } from './helpers';

const booth = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.booth()) as Promise<any>;

test('phone: share sheet when the browser supports sharing files', async ({ page }) => {
  // Headless Chrome has no share sheet; stand in for a phone browser that has one and record what it receives.
  await page.addInitScript(() => {
    (window as any).__shared = [];
    (navigator as any).canShare = (d: any) => !!d?.files?.length;
    (navigator as any).share = async (d: any) => {
      const f: File = d.files[0];
      (window as any).__shared.push({ name: f.name, type: f.type, size: f.size, head: Array.from(new Uint8Array(await f.slice(0, 24).arrayBuffer())) });
    };
  });
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-13');
  await page.tap('#photoBtn');
  expect((await booth(page)).size).toEqual([1200, 1600]); // portrait card on a portrait phone
  await page.tap('.chip[data-frame="polaroid"]');
  await page.tap('.chip[data-sticker="🌸"]');
  // Drag the sticker with a finger.
  const el = (await page.locator('.st').boundingBox())!;
  const cdp = await page.context().newCDPSession(page);
  const pt = (x: number, y: number) => [{ x, y, id: 0, radiusX: 3, radiusY: 3, force: 1 }];
  const sx = el.x + el.width / 2, sy = el.y + el.height / 2;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(sx, sy) });
  for (let i = 1; i <= 10; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(sx + 6 * i, sy + 9 * i) });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  const st = (await booth(page)).stickers[0];
  expect(st.y).toBeGreaterThan(0.35);
  await page.screenshot({ path: `${SHOTS}/r3-photobooth-mobile.png` });

  await page.tap('#boothSave');
  await expect(page.locator('#boothMsg')).toHaveText('Shared! 💌');
  const shared = await page.evaluate(() => (window as any).__shared);
  expect(shared).toHaveLength(1);
  expect(shared[0].type).toBe('image/png');
  expect(shared[0].name).toMatch(/\.png$/);
  const head = Buffer.from(shared[0].head);
  expect(head.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  expect([head.readUInt32BE(16), head.readUInt32BE(20)]).toEqual([1200, 1600]);
  expect(errors).toEqual([]);
});

test('phone without file sharing: falls back to a download plus a long-press-to-save picture', async ({ page }, info) => {
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-13');
  await page.tap('#photoBtn');
  await page.tap('.chip[data-sticker="🍓"]');
  const dl = page.waitForEvent('download');
  await page.tap('#boothSave');
  const d = await dl;
  const file = info.outputPath('p.png');
  await d.saveAs(file);
  const buf = readFileSync(file);
  expect(buf.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  expect([buf.readUInt32BE(16), buf.readUInt32BE(20)]).toEqual([1200, 1600]);
  await expect(page.locator('#boothImg')).toBeVisible();
  await expect(page.locator('#boothMsg')).toContainText('long-press');
  const box = (await page.locator('#boothImg').boundingBox())!;
  expect(box.width).toBeGreaterThan(200);
});
