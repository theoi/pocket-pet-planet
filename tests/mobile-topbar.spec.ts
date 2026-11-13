import { expect, test, type Page } from '@playwright/test';
import { decor, freshStart, pets, ready, seedSave, SHOTS, trackErrors, validSpots } from './helpers';

type Box = { x: number; y: number; width: number; height: number };
const overlaps = (a: Box, b: Box) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

/** The clock and season badge are fully on screen, show their whole text, and no top-bar button sits on them. */
async function expectHudClear(page: Page) {
  const vp = page.viewportSize()!;
  const buttons = await page.locator('#topbar > *').all();
  expect(buttons.length).toBeGreaterThanOrEqual(6);
  for (const sel of ['#clock', '#seasonBadge']) {
    const el = page.locator(sel);
    await expect(el).toBeVisible();
    const b = (await el.boundingBox())!;
    expect(b.x).toBeGreaterThanOrEqual(0);
    expect(b.x + b.width).toBeLessThanOrEqual(vp.width);
    expect(await el.evaluate((e) => e.scrollWidth <= e.clientWidth + 1)).toBe(true);
    for (const btn of buttons) {
      const bb = (await btn.boundingBox())!;
      expect(overlaps(b, bb), `${sel} overlaps ${await btn.getAttribute('id')}`).toBe(false);
    }
  }
  // Nothing under the top bar or the clock column is covered: the top-most element at the clock's centre is the clock.
  const c = (await page.locator('#clock').boundingBox())!;
  const topId = await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest('[id]')?.id, [c.x + c.width / 2, c.y + c.height / 2]);
  expect(['clock', 'app'].includes(topId ?? '')).toBe(true);
  const title = page.locator('.title h1');
  if (await title.isVisible()) {
    // The h1 box spans the whole width, so measure the text itself.
    const tb = await title.evaluate((h) => {
      const r = document.createRange();
      r.selectNodeContents(h);
      const b = r.getBoundingClientRect();
      return { x: b.x, y: b.y, width: b.width, height: b.height };
    });
    for (const btn of buttons) expect(overlaps(tb, (await btn.boundingBox())!), 'title under a top-bar button').toBe(false);
  }
}

for (const vp of [
  { width: 360, height: 640 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
]) {
  test.describe(`${vp.width}x${vp.height}`, () => {
    test.use({ viewport: vp });
    test(`top bar leaves the clock and season badge fully visible at ${vp.width}x${vp.height}`, async ({ page }) => {
      const errors = trackErrors(page);
      // Rain and a festival give the widest clock ("🌧️ ☀️ 12:3x") and badge ("🏮 Lantern Festival").
      await freshStart(page, '?time=12:34&weather=rain&date=2026-11-13');
      await expect(page.locator('#clock')).toContainText('12:3');
      await expect(page.locator('#seasonBadge')).toHaveText('🏮 Lantern Festival');
      // The long festival greeting wraps inside the screen instead of running off the edge.
      const toast = page.locator('#toast');
      await expect(toast).toContainText('Lantern Festival is on!');
      await expect(toast).toContainText('Lantern hat');
      await page.waitForTimeout(500); // past the pop-in scale
      const tb = (await toast.boundingBox())!;
      expect(tb.x).toBeGreaterThanOrEqual(8);
      expect(tb.x + tb.width).toBeLessThanOrEqual(vp.width - 8);
      expect(await toast.evaluate((e) => e.scrollWidth <= e.clientWidth + 1)).toBe(true);
      if (vp.width <= 390) expect(tb.height).toBeGreaterThan(40); // wrapped onto more than one line
      if (vp.width === 360) await page.screenshot({ path: `${SHOTS}/r3-toast-360.png` });
      await expectHudClear(page);
      // Night colours and the mute toggle change nothing about the layout.
      await page.tap('#muteBtn');
      await expectHudClear(page);
      await page.screenshot({ path: `${SHOTS}/r3-topbar-${vp.width}x${vp.height}.png` });
      expect(errors).toEqual([]);
    });
  });
}

test.describe('landscape decorate', () => {
  test.use({ viewport: { width: 844, height: 390 } });
  test('a decoration just above the expanded tray selects on the first tap, also after a spin', async ({ page }) => {
    test.setTimeout(150_000);
    const errors = trackErrors(page);
    await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
    await page.tap('#decoBtn');
    await page.tap('.chip[data-kind="cottage"]');
    const [s1] = await validSpots(page);
    await page.touchscreen.tap(s1.x, s1.y);
    await expect.poll(async () => (await decor(page)).length).toBe(1);
    await page.tap('.chip[data-kind="cottage"]');
    const a = (await decor(page))[0];
    await page.touchscreen.tap(a.screen.x, a.screen.y);
    await expect(page.locator('#decoSel')).toBeVisible();
    const tray = (await page.locator('#decoTray').boundingBox())!;

    // Put a bench just above where the expanded tray ends.
    await page.tap('.chip[data-kind="bench"]');
    let spot: { x: number; y: number } | null = null;
    for (let y = tray.y - 3; y > tray.y - 24 && !spot; y -= 3)
      for (let x = 422 - 240; x <= 422 + 240 && !spot; x += 20) {
        if (Math.hypot(x - a.screen.x, y - a.screen.y) < 80) continue;
        const r = await page.evaluate(([x, y]) => (window as any).__ppp.probe(x, y), [x, y]);
        if (r.hit && !r.problem) spot = { x, y };
      }
    expect(spot, 'a free spot just above the tray').not.toBeNull();
    await page.touchscreen.tap(spot!.x, spot!.y);
    await expect.poll(async () => (await decor(page)).length).toBe(2);
    await page.tap('.chip[data-kind="bench"]');
    const benchId = (await decor(page)).find((d) => d.kind === 'bench')!.id;

    const tapBench = async () => {
      const cur = (await decor(page)).find((d) => d.id === benchId)!;
      // Near the lower rim a decoration's "up" points down the screen, so aim at its visible part above the tray.
      const top = (await page.locator('#decoTray').boundingBox())!.y;
      await page.touchscreen.tap(cur.screen.x, Math.min(cur.screen.y, top - 5));
      const now = await decor(page);
      expect(now.find((d) => d.selected)?.id, `bench at ${JSON.stringify(cur.screen)}, tray top ${top}; all ${JSON.stringify(now.map((d) => [d.kind, d.screen]))}`).toBe(benchId);
      return cur;
    };
    // Select the cottage so the tray is expanded, then tap the bench once.
    await page.touchscreen.tap(a.screen.x, a.screen.y);
    await expect(page.locator('#decoSel')).toBeVisible();
    const t2 = (await page.locator('#decoTray').boundingBox())!;
    const b1 = await tapBench();
    expect(b1.screen.y).toBeLessThan(t2.y + 6);
    await page.tap('#decoRotate'); // only the selected decoration turns
    const rots = Object.fromEntries((await decor(page)).map((d) => [d.id, d.rot]));
    expect(rots[benchId]).not.toBe(0);

    // Spin the planet a little with a finger on empty sky, then tap the bench again (one tap) and remove it.
    const cdp = await page.context().newCDPSession(page);
    const pt = (x: number, y: number) => [{ x, y, id: 0, radiusX: 3, radiusY: 3, force: 1 }];
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(60, 120) });
    for (let i = 1; i <= 8; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(60 + i * 3, 120 - i * 2) });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await page.waitForTimeout(900);
    // Re-select the cottage so the tray is expanded again.
    const a2 = (await decor(page)).find((d) => d.kind === 'cottage')!;
    await page.touchscreen.tap(a2.screen.x, a2.screen.y);
    await expect(page.locator('#decoSel')).toBeVisible();
    const b2 = (await decor(page)).find((d) => d.id === benchId)!;
    expect(b2.visible).toBe(true);
    expect(b2.screen.y).toBeLessThan((await page.locator('#decoTray').boundingBox())!.y + 6);
    await tapBench();
    await page.screenshot({ path: `${SHOTS}/r3-landscape-decorate-edge.png` });
    await page.tap('#decoRemove');
    expect((await decor(page)).map((d) => d.kind)).toEqual(['cottage']);
    expect(errors).toEqual([]);
  });
});

test.describe('landscape cards', () => {
  test.use({ viewport: { width: 844, height: 390 } });
  test('the pet panel, plot card and visitor shop stay clear of the clock and season badge', async ({ page }) => {
    test.setTimeout(150_000);
    const errors = trackErrors(page);
    // Lantern Festival night: the widest badge, and Twinkle comes.
    await freshStart(page, '?time=22:30&weather=clear&date=2026-11-13');
    const s = await page.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')!));
    s.decor = [{ id: 'p1', kind: 'plot', pos: [0.3, 0.3, 0.9], rot: 0 }];
    s.garden = { seeds: { strawberry: 2 }, plots: { p1: { seed: 'strawberry', grown: 10, at: Date.now(), wetUntil: 0 } } };
    s.savedAt = Date.now();
    await seedSave(page, s);
    await page.goto('?time=22:30&weather=clear&date=2026-11-13&visitor=1');
    await ready(page);
    const hud = async () => [(await page.locator('#clock').boundingBox())!, (await page.locator('#seasonBadge').boundingBox())!];
    const clear = async (sel: string) => {
      await expect(page.locator(sel)).toBeVisible();
      await page.waitForTimeout(500); // pop-in
      const card = (await page.locator(sel).boundingBox())!;
      for (const h of await hud()) expect(overlaps(card, h), `${sel} under the clock/badge`).toBe(false);
      expect(card.y + card.height).toBeLessThanOrEqual(390);
      return card;
    };
    const tapAt = async (get: () => Promise<{ x: number; y: number }>, sel: string) => {
      for (let i = 0; i < 10 && !(await page.locator(sel).isVisible()); i++) {
        const p = await get();
        await page.touchscreen.tap(p.x, p.y);
        await page.waitForTimeout(400);
        if (sel !== '#panel' && (await page.locator('#panel').isVisible())) await page.tap('#close');
      }
    };
    // Plot card.
    await page.evaluate(() => (window as any).__ppp.focus([0.3, 0.3, 0.9], 8));
    await page.waitForTimeout(600);
    await tapAt(async () => (await page.evaluate(() => (window as any).__ppp.garden())).plots[0].screen, '#plotCard');
    await clear('#plotCard');
    await page.screenshot({ path: `${SHOTS}/r4-landscape-plot.png` });
    await page.tap('#plotClose');
    // Visitor shop.
    await expect.poll(async () => (await page.evaluate(() => (window as any).__ppp.visitor())).state, { timeout: 60_000 }).toBe('here');
    await tapAt(async () => (await page.evaluate(() => (window as any).__ppp.visitor())).screen, '#shop');
    await clear('#shop');
    await page.screenshot({ path: `${SHOTS}/r4-landscape-shop.png` });
    await page.tap('#shopClose');
    // Pet panel.
    await tapAt(async () => (await pets(page)).filter((p) => p.visible && p.screen.y > 60 && p.screen.y < 360 && p.screen.x < 500)[0]?.screen ?? { x: 0, y: 0 }, '#panel');
    await clear('#panel');
    expect(errors).toEqual([]);
  });
});
