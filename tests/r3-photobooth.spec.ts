import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { freshStart, SHOTS, trackErrors } from './helpers';

const booth = (page: Page) => page.evaluate(() => (window as any).__ppp.booth()) as Promise<any>;

/** Parse a PNG's signature and IHDR to prove it's a real image of the expected size. */
function pngInfo(buf: Buffer) {
  expect(buf.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  expect(buf.subarray(12, 16).toString('ascii')).toBe('IHDR');
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), bytes: buf.length };
}

/** Average colour difference between two image regions, to prove stickers/frames are actually in the pixels. */
async function pixelStats(page: Page, file: string) {
  const b64 = readFileSync(file).toString('base64');
  return page.evaluate(async (b64) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    // Between the scalloped edge and the photo window: plain frame paper.
    const corner = ctx.getImageData(300, 70, 1, 1).data;
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    const colors = new Set<number>();
    for (let i = 0; i < d.length; i += 4 * 97) colors.add((d[i] >> 4) * 256 + (d[i + 1] >> 4) * 16 + (d[i + 2] >> 4));
    return { corner: [corner[0], corner[1], corner[2]], distinctColors: colors.size };
  }, b64);
}

test('desktop: freeze, frame, drag stickers, and download a real PNG postcard', async ({ page }, info) => {
  test.setTimeout(90_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-13');
  await page.click('#photoBtn');
  await expect(page.locator('#booth')).toBeVisible();
  const b0 = await booth(page);
  expect(b0.size).toEqual([1600, 1200]);
  expect(b0.frame).toBe('cozy');

  // The frozen photo stays frozen: the planet loop is paused while the booth is open.
  const cam = await page.evaluate(() => (window as any).__ppp.camera());
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => (window as any).__ppp.camera())).toEqual(cam);

  await page.click('.chip[data-frame="scallop"]');
  expect((await booth(page)).frame).toBe('scallop');
  for (const s of ['💖', '🌸', '🏮']) await page.click(`.chip[data-sticker="${s}"]`);
  await expect(page.locator('.st')).toHaveCount(3);

  // Drag the heart to the top-left area of the card.
  const stage = (await page.locator('#boothStage').boundingBox())!;
  const heart = page.locator('.st', { hasText: '💖' });
  const hb = (await heart.boundingBox())!;
  await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
  await page.mouse.down();
  for (let i = 1; i <= 10; i++) await page.mouse.move(hb.x + hb.width / 2 + ((stage.x + stage.width * 0.15 - hb.x - hb.width / 2) * i) / 10, hb.y + hb.height / 2 + ((stage.y + stage.height * 0.2 - hb.y - hb.height / 2) * i) / 10);
  await page.mouse.up();
  const st = (await booth(page)).stickers.find((s: any) => s.emoji === '💖');
  expect(st.x).toBeLessThan(0.22);
  expect(st.y).toBeLessThan(0.27);
  // Make it bigger and remove another one.
  await page.click('#stBigger');
  expect((await booth(page)).stickers.find((s: any) => s.emoji === '💖').size).toBeCloseTo(0.125, 3);
  await page.locator('.st', { hasText: '🏮' }).click();
  await page.click('#stRemove');
  await expect(page.locator('.st')).toHaveCount(2);
  await page.screenshot({ path: `${SHOTS}/r3-photobooth.png` });

  const dl = page.waitForEvent('download');
  await page.click('#boothSave');
  const download = await dl;
  expect(download.suggestedFilename()).toMatch(/^pocket-pet-planet-\d{8}-\d{4}\.png$/);
  const file = info.outputPath('postcard.png');
  await download.saveAs(file);
  const png = pngInfo(readFileSync(file));
  expect([png.width, png.height]).toEqual([1600, 1200]);
  expect(png.bytes).toBeGreaterThan(100_000);
  const px = await pixelStats(page, file);
  expect(px.corner).toEqual([255, 217, 234]); // scallop frame paper is in the export
  expect(px.distinctColors).toBeGreaterThan(80); // a real photo, not a blank card
  await expect(page.locator('#boothResult')).toBeVisible();
  await expect(page.locator('#boothImg')).toHaveAttribute('src', /^blob:/);
  // Keep a copy as evidence.
  await download.saveAs(`${SHOTS}/r3-postcard.png`);

  await page.click('#boothResultClose');
  await page.click('#boothClose');
  await expect(page.locator('#booth')).toBeHidden();
  expect(errors).toEqual([]);
});

test('every frame renders and exports', async ({ page }) => {
  await freshStart(page, '?time=21:30&weather=clear&date=2026-11-13');
  await page.click('#photoBtn');
  for (const f of ['cozy', 'polaroid', 'starry', 'none']) {
    await page.click(`.chip[data-frame="${f}"]`);
    const dl = page.waitForEvent('download');
    await page.click('#boothSave');
    const d = await dl;
    const buf = readFileSync((await d.path())!);
    expect(pngInfo(buf).width).toBe(1600);
    await page.click('#boothResultClose');
  }
  await page.click('.chip[data-frame="starry"]');
  await page.screenshot({ path: `${SHOTS}/r3-photobooth-starry.png` });
});
