import { expect, test, type Page } from '@playwright/test';
import { freshStart, ready, SHOTS, trackErrors } from './helpers';

const wx = (page: Page) => page.evaluate(() => (window as any).__ppp.weather()) as Promise<any>;
const sky = (page: Page) => page.evaluate(() => (window as any).__ppp.sky()) as Promise<any>;

/** Average colour of a screen region, for checking that something is actually drawn. */
async function regionStats(page: Page, x: number, y: number, w: number, h: number) {
  const buf = await page.screenshot({ clip: { x, y, width: w, height: h } });
  return page.evaluate(async (b64) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let white = 0, sat = 0, greenish = 0;
    for (let i = 0; i < d.length; i += 4) {
      const [r, g, bl] = [d[i], d[i + 1], d[i + 2]];
      // Snow under an overcast sky is a soft off-white: bright and nearly colourless.
      if (Math.min(r, g, bl) > 210 && Math.max(r, g, bl) - Math.min(r, g, bl) < 18) white++;
      sat += Math.max(r, g, bl) - Math.min(r, g, bl);
      // The pastel sky is all lilac/pink/peach; green-dominant pixels there can only come from the rainbow.
      if (g > r + 4 && g >= bl - 4) greenish++;
    }
    const n = d.length / 4;
    return { whiteFrac: white / n, avgSat: sat / n, greenFrac: greenish / n };
  }, buf.toString('base64'));
}

test('rain: dark clouds, falling drops, flowers under clouds open up', async ({ page }) => {
  test.setTimeout(90_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=rain');
  const w0 = await wx(page);
  expect(w0.kind).toBe('rain');
  expect(w0.rain).toBeGreaterThan(0.9);
  await expect(page.locator('#clock')).toContainText('🌧️');
  expect(w0.bloomMax).toBeLessThan(0.5); // fresh planet: buds
  // Close-up of a flower patch before the rain has done its work.
  const normals = await page.evaluate(() => (window as any).__ppp.flowerNormals());
  await page.waitForTimeout(8000);
  const w1 = await wx(page);
  const grown = w1.blooms.filter((b: number, i: number) => b > w0.blooms[i] + 0.2).length;
  expect(grown).toBeGreaterThanOrEqual(3); // the ones under a cloud perk up fast
  expect(w1.bloomAvg).toBeGreaterThan(w0.bloomAvg);
  await page.screenshot({ path: `${SHOTS}/r2-rain.png` });
  const best = w1.blooms.indexOf(Math.max(...w1.blooms));
  // Same flower on a dry planet vs. after the shower, seen from close up.
  await page.evaluate((n) => (window as any).__ppp.focus(n, 3.5), normals[best]);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${SHOTS}/r2-flowers-bloomed.png` });
  // Blooms persist.
  await page.waitForTimeout(3200);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')!).flowers);
  expect(saved.length).toBe(w1.blooms.length);
  await page.goto('?time=12:00&weather=clear');
  await ready(page);
  const w2 = await wx(page);
  expect(w2.bloomAvg).toBeGreaterThan(w0.bloomAvg + 0.02);
  expect(w2.rain).toBe(0);

  // For comparison: the same spot on a brand-new, never-rained-on planet (buds).
  await freshStart(page, '?time=12:00&weather=clear');
  await page.evaluate((n) => (window as any).__ppp.focus(n, 3.5), normals[best]);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${SHOTS}/r2-flowers-buds.png` });
  expect(errors).toEqual([]);
});

test('rain clearing in daylight brings a rainbow; at night it does not', async ({ page }) => {
  await freshStart(page, '?debug=1&time=12:00&weather=rain');
  await page.evaluate(() => (window as any).__ppp.setWeather('clear'));
  await expect.poll(async () => (await wx(page)).kind).toBe('rainbow');
  await expect.poll(async () => (await wx(page)).rainbow, { timeout: 15_000 }).toBeGreaterThan(0.8);
  await expect(page.locator('#clock')).toContainText('🌈');
  await page.waitForTimeout(500);
  // The pastel arc is drawn: more colourful pixels at the arc's flank than in clear sky.
  const arc = await regionStats(page, 222, 300, 50, 200);
  await page.screenshot({ path: `${SHOTS}/r2-rainbow.png` });
  await page.goto('?time=12:00&weather=clear');
  await ready(page);
  const plain = await regionStats(page, 222, 300, 50, 200);
  expect(arc.greenFrac).toBeGreaterThan(0.03);
  expect(plain.greenFrac).toBeLessThan(0.01);

  await page.goto('?debug=1&time=22:00&weather=rain');
  await ready(page);
  await page.evaluate(() => (window as any).__ppp.setWeather('clear'));
  await page.waitForTimeout(500);
  expect((await wx(page)).kind).toBe('clear');
});

test('snow: flakes fall and the planet gets a white dusting', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear');
  const clear = await regionStats(page, 440, 160, 400, 420);
  await page.goto('?time=12:00&weather=snow');
  await ready(page);
  const w = await wx(page);
  expect(w.kind).toBe('snow');
  expect(w.dust).toBe(1);
  await expect(page.locator('#clock')).toContainText('❄️');
  await page.waitForTimeout(1000);
  const snowy = await regionStats(page, 440, 160, 400, 420);
  expect(snowy.whiteFrac).toBeGreaterThan(clear.whiteFrac + 0.05);
  await page.screenshot({ path: `${SHOTS}/r2-snow.png` });
  expect(errors).toEqual([]);
});

test('weather combines with night: rain at 22:00 dims stars and fireflies; pets still sleep', async ({ page }) => {
  await freshStart(page, '?time=22:00&weather=clear');
  const clearNight = await sky(page);
  await page.goto('?time=22:00&weather=rain');
  await ready(page);
  await page.waitForTimeout(1500);
  const rainyNight = await sky(page);
  expect(rainyNight.night).toBe(1);
  expect(rainyNight.fireflies).toBeLessThan(0.05);
  expect(clearNight.fireflies).toBeGreaterThan(0.05);
  expect((await page.evaluate(() => (window as any).__ppp.pets())).every((p: any) => p.sleeping)).toBe(true);
  await page.screenshot({ path: `${SHOTS}/r2-night-rain.png` });
  await page.goto('?time=22:00&weather=snow');
  await ready(page);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${SHOTS}/r2-night-snow.png` });
});

test('without ?weather the forecast follows a schedule and survives reload', async ({ page }) => {
  await freshStart(page, '?time=12:00');
  const a = (await wx(page)).kind;
  expect(['clear', 'rain', 'snow']).toContain(a);
  await page.reload();
  await ready(page);
  expect((await wx(page)).kind).toBe(a);
});
