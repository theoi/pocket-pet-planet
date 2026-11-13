import { expect, test } from '@playwright/test';
import { freshStart, ready, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const audio = (page: import('@playwright/test').Page) => page.evaluate(() => (window as any).__ppp.audio()) as Promise<{ state: string; muted: boolean }>;

test('audio starts only after the first user gesture, then plays', async ({ page }) => {
  const errors = trackErrors(page);
  // Count AudioContexts created, so we see one isn't made at load time.
  await page.addInitScript(() => {
    const Orig = window.AudioContext;
    (window as any).__ctxCount = 0;
    (window as any).AudioContext = class extends Orig {
      constructor(...a: any[]) {
        super(...a);
        (window as any).__ctxCount++;
      }
    };
  });
  await freshStart(page, '?time=12:00');
  await page.waitForTimeout(1500);
  expect(await page.evaluate(() => (window as any).__ctxCount)).toBe(0);
  expect((await audio(page)).state).toBe('none');

  await selectVisiblePet(page); // a click is a gesture
  await expect.poll(async () => (await audio(page)).state).toBe('running');
  expect(await page.evaluate(() => (window as any).__ctxCount)).toBe(1);
  await page.click('#petBtn'); // purr
  await page.click('#feedBtn'); // chimes
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => (window as any).__ctxCount)).toBe(1);
  expect(errors).toEqual([]);
});

test('mute toggle is visible, persists across reloads, and silences output', async ({ page }) => {
  await freshStart(page, '?time=12:00');
  const btn = page.locator('#muteBtn');
  await expect(btn).toBeVisible();
  await expect(btn).toHaveText('🔊');
  await btn.click();
  await expect(btn).toHaveText('🔇');
  await expect(btn).toHaveAttribute('aria-pressed', 'true');
  expect((await audio(page)).muted).toBe(true);
  await page.screenshot({ path: `${SHOTS}/r2-mute.png`, clip: { x: 0, y: 0, width: 420, height: 60 } });

  await page.reload();
  await ready(page);
  await expect(btn).toHaveText('🔇');
  expect((await audio(page)).muted).toBe(true);

  await btn.click();
  await expect(btn).toHaveText('🔊');
  await page.reload();
  await ready(page);
  await expect(btn).toHaveText('🔊');
  expect((await audio(page)).muted).toBe(false);
});

test('ambient loop and sound effects actually produce sound (offline analysis of the live graph)', async ({ page }) => {
  await freshStart(page, '?time=12:00');
  await page.mouse.click(30, 400); // gesture on empty sky
  await expect.poll(async () => (await audio(page)).state).toBe('running');
  // Tap an analyser onto the destination and measure the signal level after the pad fades in.
  const level = async () =>
    page.evaluate(async () => {
      const s = (window as any).__ppp.__sound;
      const ctx: AudioContext = s.ctx;
      const an = ctx.createAnalyser();
      an.fftSize = 2048;
      s.tap(an);
      await new Promise((r) => setTimeout(r, 400));
      const d = new Float32Array(an.fftSize);
      an.getFloatTimeDomainData(d);
      return Math.sqrt(d.reduce((a, x) => a + x * x, 0) / d.length);
    });
  await page.waitForTimeout(4500);
  const on = await level();
  expect(on).toBeGreaterThan(0.001);
  expect(on).toBeLessThan(0.5); // never blaring
  await page.click('#muteBtn');
  await page.waitForTimeout(1200);
  const off = await level();
  expect(off).toBeLessThan(on / 20);
});

test('effects stay gentle: no clipping when purr, feed, and evolve stack up', async ({ page }) => {
  await freshStart(page, '?debug=1&time=12:00');
  await selectVisiblePet(page);
  await expect.poll(async () => (await audio(page)).state).toBe('running');
  const peak = page.evaluate(async () => {
    const s = (window as any).__ppp.__sound;
    const an: AnalyserNode = s.ctx.createAnalyser();
    an.fftSize = 2048;
    s.tap(an);
    const d = new Float32Array(an.fftSize);
    let max = 0;
    const t0 = performance.now();
    while (performance.now() - t0 < 3500) {
      an.getFloatTimeDomainData(d);
      for (const x of d) max = Math.max(max, Math.abs(x));
      await new Promise((r) => setTimeout(r, 20));
    }
    return max;
  });
  await page.click('#petBtn');
  await page.click('#feedBtn');
  await page.click('#dbgEvolve');
  const p = await peak;
  expect(p).toBeGreaterThan(0.01);
  expect(p).toBeLessThan(0.7);
});
