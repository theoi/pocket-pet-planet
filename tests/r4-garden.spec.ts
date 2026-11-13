import { expect, test, type Page } from '@playwright/test';
import { decor, freshStart, ready, savedGame, seedSave, SHOTS, trackErrors, validSpots } from './helpers';

export const garden = (page: Page) => page.evaluate(() => (window as any).__ppp.garden()) as Promise<{ seeds: Record<string, number>; plots: any[] }>;
const H = 3600_000;

/** Tap or click a plot until its card opens (the camera is turned to face it first). */
async function openPlot(page: Page, touch = false) {
  const p = (await garden(page)).plots[0];
  await page.evaluate((pos) => (window as any).__ppp.focus(pos, 6.2), p.pos ?? (await decor(page))[0].pos);
  await page.waitForTimeout(600);
  // A pet wandering in front of the plot takes the tap (pets come first), so try again once it has moved on.
  for (let i = 0; i < 10 && !(await page.locator('#plotCard').isVisible()); i++) {
    const q = (await garden(page)).plots[0];
    if (touch) await page.touchscreen.tap(q.screen.x, q.screen.y);
    else await page.mouse.click(q.screen.x, q.screen.y);
    await page.waitForTimeout(500);
    if (await page.locator('#panel').isVisible()) await page.click('#close');
  }
  await expect(page.locator('#plotCard')).toBeVisible();
  await page.waitForTimeout(400);
}

test('plant, water, grow over (skipped) days, harvest treats', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  expect((await garden(page)).seeds).toEqual({ strawberry: 3, blueberry: 2 });
  // Place a plot from the decorate tray.
  await page.click('#decoBtn');
  await page.click('.chip[data-kind="plot"]');
  const [s1] = await validSpots(page);
  await page.mouse.click(s1.x, s1.y);
  await expect.poll(async () => (await decor(page)).length).toBe(1);
  await page.click('#decoDone');
  await page.waitForTimeout(300);

  await openPlot(page);
  await expect(page.locator('#plotStage')).toHaveText('Empty plot');
  await expect(page.locator('#plotSeeds .chip[data-seed="sunpeach"]')).toBeDisabled();
  await page.click('#plotSeeds .chip[data-seed="strawberry"]');
  await expect(page.locator('#plotStage')).toHaveText('Sprouting');
  await expect(page.locator('#plotTitle')).toHaveText('🍓 Strawberry plot');
  await expect(page.locator('#plotNote')).toContainText('Ripe in about 30 h');
  let g = await garden(page);
  expect(g.seeds.strawberry).toBe(2);
  expect(g.plots[0]).toMatchObject({ seed: 'strawberry', stage: 1, wet: false });
  await page.click('#plotWater');
  await expect(page.locator('#plotWater')).toBeDisabled();
  await expect(page.locator('#plotNote')).toContainText('soil is wet');
  expect((await garden(page)).plots[0].wet).toBe(true);
  await page.screenshot({ path: `${SHOTS}/r4-garden-planted.png` });
  const s = await savedGame(page);
  expect(s.garden.plots[g.plots[0].id].seed).toBe('strawberry');

  // 12 skipped hours (dry): leafy, about 40 %.
  await page.goto('?time=12:00&weather=clear&date=2026-11-03&gardenSkip=12');
  await ready(page);
  g = await garden(page);
  expect(g.plots[0].stage).toBe(2);
  expect(g.plots[0].progress).toBeGreaterThan(0.39);
  expect(g.plots[0].progress).toBeLessThan(0.45);
  // The skip applies once: it's dropped from the address (other parameters stay), so a reload doesn't skip again.
  expect(page.url()).not.toContain('gardenSkip');
  expect(page.url()).toContain('date=2026-11-03');
  const before = g.plots[0].progress;
  await page.reload();
  await ready(page);
  expect((await garden(page)).plots[0].progress - before).toBeLessThan(0.01);
  // 20 more: ripe, with fruit showing.
  await page.goto('?time=12:00&weather=clear&date=2026-11-03&gardenSkip=20');
  await ready(page);
  g = await garden(page);
  expect(g.plots[0].stage).toBe(4);
  await openPlot(page);
  await expect(page.locator('#plotStage')).toHaveText('Ripe!');
  await expect(page.locator('#plotWater')).toBeHidden();
  await page.screenshot({ path: `${SHOTS}/r4-garden-ripe.png` });
  await page.click('#plotHarvest');
  await expect(page.locator('#toast')).toContainText('Picked 3 strawberries');
  await expect(page.locator('#snackCount')).toHaveText('3');
  g = await garden(page);
  expect(g.plots[0].stage).toBe(0);
  expect([3, 4]).toContain(g.seeds.strawberry); // 1 seed back, sometimes 2
  const d = await page.evaluate(() => (window as any).__ppp.diary());
  expect(d.map((e: any) => e.text)).toEqual(expect.arrayContaining(['Planted strawberry seeds', 'Harvested 3 strawberries from the garden']));
  expect(errors).toEqual([]);
});

test('offline growth comes from timestamps alone; wet hours count 1.5×; rain waters the plots', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  const s = await savedGame(page);
  const now = Date.now();
  const pos = (x: number) => { const v = [x, 0.4, 0.9]; const l = Math.hypot(...v); return v.map((c) => c / l); };
  s.decor = [{ id: 'p1', kind: 'plot', pos: pos(-0.3), rot: 0 }, { id: 'p2', kind: 'plot', pos: pos(0.3), rot: 0 }, { id: 'p3', kind: 'plot', pos: pos(0), rot: 0 }];
  // Planted 20 h ago. p1 was watered then (8 wet hours → 24 growth h), p2 never, p3 is empty.
  s.garden = { seeds: { sunpeach: 1 }, plots: {
    p1: { seed: 'blueberry', grown: 0, at: now - 20 * H, wetUntil: now - 12 * H, plantedAt: now - 20 * H },
    p2: { seed: 'strawberry', grown: 0, at: now - 20 * H, wetUntil: 0, plantedAt: now - 20 * H },
    p3: { grown: 0, at: now - 20 * H, wetUntil: 0 },
  } };
  s.savedAt = now;
  await seedSave(page, s);
  const g = await garden(page);
  const by = Object.fromEntries(g.plots.map((p) => [p.id, p]));
  expect(by.p1.grown).toBeCloseTo(24, 1);
  expect(by.p1.stage).toBe(4); // blueberries ripen at 24 h
  expect(by.p2.grown).toBeCloseTo(20, 1);
  expect(by.p2.stage).toBe(3); // 20 of 30 h: flowering
  expect(by.p3.grown).toBe(0);
  expect(g.seeds).toEqual({ sunpeach: 1 });
  await page.screenshot({ path: `${SHOTS}/r4-garden-stages.png` });

  await page.goto('?time=12:00&weather=rain&date=2026-11-03');
  await ready(page);
  await expect.poll(async () => (await garden(page)).plots.filter((p) => p.seed).every((p) => p.wet), { timeout: 15_000 }).toBe(true);
  expect(errors).toEqual([]);
});

test('removing a growing plot gives its seed back; junk garden data is dropped', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  const s = await savedGame(page);
  s.decor = [{ id: 'p1', kind: 'plot', pos: [0, 0.4, 0.92], rot: 0 }];
  s.garden = { seeds: { strawberry: 'many', bogus: 4, blueberry: 1 }, plots: { p1: { seed: 'strawberry', grown: 3, at: Date.now(), wetUntil: 0 }, ghost: { seed: 'x' }, bad: 7 } };
  s.savedAt = Date.now();
  await seedSave(page, s);
  let g = await garden(page);
  expect(g.seeds).toEqual({ blueberry: 1 });
  expect(g.plots.map((p) => p.id)).toEqual(['p1']);
  expect(Object.keys((await savedGame(page)).garden.plots)).toEqual(['p1']);
  await page.click('#decoBtn');
  const d = (await decor(page))[0];
  await page.mouse.click(d.screen.x, d.screen.y);
  await page.click('#decoRemove');
  g = await garden(page);
  expect(g.seeds).toEqual({ blueberry: 1, strawberry: 1 });
  expect(g.plots).toEqual([]);
  expect(errors).toEqual([]);
});
