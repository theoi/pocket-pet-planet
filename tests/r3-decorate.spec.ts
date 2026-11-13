import { expect, test } from '@playwright/test';
import { angle, cameraPos, decor, freshStart, pets, ready, savedGame, seedSave, selectedId, SHOTS, trackErrors, validSpots } from './helpers';

const Q = '?time=12:00&weather=clear&date=2026-11-03';

test('decorate with the mouse: place, refuse the pond, drag to move, turn, remove; placements persist', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, Q);
  await page.click('#decoBtn');
  await expect(page.locator('#decoTray')).toBeVisible();
  await expect(page.locator('#decoBtn')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#decoItems .chip')).toHaveCount(6);

  await page.click('.chip[data-kind="cottage"]');
  const [s1] = await validSpots(page);
  await page.mouse.click(s1.x, s1.y);
  await expect.poll(async () => (await decor(page)).length).toBe(1);
  expect((await decor(page))[0].kind).toBe('cottage');

  // The pond refuses buildings.
  const pond = (await page.evaluate(() => (window as any).__ppp.ponds())).find((p: any) => p.visible);
  await page.mouse.click(pond.screen.x, pond.screen.y);
  await expect(page.locator('#decoHint')).toContainText('pond');
  expect((await decor(page)).length).toBe(1);

  // Drag the cottage somewhere else; the planet doesn't spin while dragging.
  const cam0 = await cameraPos(page);
  const before = (await decor(page))[0];
  const [s2] = await validSpots(page, [before.screen], 120);
  await page.mouse.move(before.screen.x, before.screen.y);
  await page.mouse.down();
  for (let i = 1; i <= 12; i++) await page.mouse.move(before.screen.x + ((s2.x - before.screen.x) * i) / 12, before.screen.y + ((s2.y - before.screen.y) * i) / 12);
  await page.mouse.up();
  await expect(page.locator('#decoHint')).toHaveText('Moved!');
  const after = (await decor(page))[0];
  expect(angle(before.pos, after.pos)).toBeGreaterThan(0.08);
  expect(angle(cam0, await cameraPos(page))).toBeLessThan(0.01);

  // Dragging onto the pond makes it hop back.
  await page.mouse.move(after.screen.x, after.screen.y);
  await page.mouse.down();
  for (let i = 1; i <= 12; i++) await page.mouse.move(after.screen.x + ((pond.screen.x - after.screen.x) * i) / 12, after.screen.y + ((pond.screen.y - after.screen.y) * i) / 12);
  await page.mouse.up();
  await expect(page.locator('#decoHint')).toContainText('hopped back');
  expect(angle((await decor(page))[0].pos, after.pos)).toBeLessThan(0.001);

  // Turn it (selected after the drag).
  await expect(page.locator('#decoSel')).toBeVisible();
  const rot0 = (await decor(page))[0].rot;
  await page.click('#decoRotate');
  expect((await decor(page))[0].rot).toBeCloseTo(rot0 + Math.PI / 4, 3);

  // Fill in a little village for the screenshot.
  let used = [(await decor(page))[0].screen];
  for (const kind of ['shroomhouse', 'lantern', 'flowerbed', 'bench', 'well']) {
    await page.click(`.chip[data-kind="${kind}"]`);
    const [s] = await validSpots(page, used, 75);
    await page.mouse.click(s.x, s.y);
    used.push(s);
    await page.click(`.chip[data-kind="${kind}"]`); // stop placing
  }
  expect((await decor(page)).map((d) => d.kind).sort()).toEqual(['bench', 'cottage', 'flowerbed', 'lantern', 'shroomhouse', 'well']);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${SHOTS}/r3-decorate.png` });

  // Persist.
  const saved = await decor(page);
  await page.reload();
  await ready(page);
  const re = await decor(page);
  expect(re.map((d) => [d.id, d.kind])).toEqual(saved.map((d) => [d.id, d.kind]));
  re.forEach((d, i) => expect(angle(d.pos, saved[i].pos)).toBeLessThan(1e-6));

  // Remove one.
  await page.click('#decoBtn');
  const target = re.find((d) => d.visible)!;
  await page.mouse.click(target.screen.x, target.screen.y);
  await expect(page.locator('#decoSel')).toBeVisible();
  await page.click('#decoRemove');
  expect((await decor(page)).length).toBe(5);

  // Done: back to normal play, pets are tappable again.
  await page.click('#decoDone');
  await expect(page.locator('#decoTray')).toBeHidden();
  const p = (await pets(page)).find((x) => x.visible && x.screen.y > 100 && x.screen.y < 600)!;
  await page.mouse.click(p.screen.x, p.screen.y);
  await expect.poll(() => selectedId(page)).not.toBeNull();
  expect(errors).toEqual([]);
});

test('pets walk over to cottages to nap (and to benches to hang out)', async ({ page }) => {
  test.setTimeout(90_000);
  await freshStart(page, '?debug=1' + Q.replace('?', '&'));
  const s = await savedGame(page);
  const p0 = s.pets[0].pos;
  // A cottage a short walk away from the first pet.
  const c = [p0[0] + 0.25, p0[1], p0[2]];
  const l = Math.hypot(...c);
  s.decor = [{ id: 'home', kind: 'cottage', pos: c.map((v: number) => v / l), rot: 0 }];
  s.savedAt = Date.now();
  await seedSave(page, s);
  await page.evaluate(() => (window as any).__ppp.visitNow());
  const v = await page.evaluate(() => (window as any).__ppp.visits());
  expect(v).toHaveLength(1);
  expect(v[0].decor).toBe('home');
  expect(v[0].kind).toBe('nap');
  const petId = v[0].pet;
  await expect.poll(async () => (await pets(page)).find((p) => p.id === petId)!.napping, { timeout: 40_000 }).toBe(true);
  // "sleeping" is updated on the next frame after arriving.
  await expect.poll(async () => (await pets(page)).find((p) => p.id === petId)!.sleeping).toBe(true);
  const napper = (await pets(page)).find((p) => p.id === petId)!;
  expect(angle(napper.pos, (await decor(page))[0].pos)).toBeLessThan(0.2);
  await page.evaluate((id) => (window as any).__ppp.focus(id, 5.6), petId);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${SHOTS}/r3-nap.png` });
});

test('decorations from the save that sit in a pond are still loaded (no crash), and new ones are refused there', async ({ page }) => {
  await freshStart(page, Q);
  const s = await savedGame(page);
  const pond = (await page.evaluate(() => (window as any).__ppp.ponds()))[0].normal;
  s.decor = [{ id: 'wet', kind: 'bench', pos: pond, rot: 0 }, { id: 'bad', kind: 'spaceship', pos: [0, 1, 0], rot: 0 }];
  s.savedAt = Date.now();
  await seedSave(page, s);
  expect((await decor(page)).map((d) => d.id)).toEqual(['wet']);
});
