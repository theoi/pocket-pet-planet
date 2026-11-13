import { expect, test, type Page } from '@playwright/test';
import { freshStart, pets, ready, savedGame, seedSave, SHOTS, trackErrors } from './helpers';

const friends = (page: Page) => page.evaluate(() => (window as any).__ppp.friends()) as Promise<Record<string, number>>;
const diary = (page: Page) => page.evaluate(() => (window as any).__ppp.diary()) as Promise<{ at: number; icon: string; text: string; key?: string }[]>;
const key = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);
const unit = (v: number[]) => {
  const l = Math.hypot(...v);
  return v.map((x) => x / l);
};
/** A seeded v4 planet from a fresh one: pets get the given positions (others are parked on the far side). */
async function planet(page: Page, query: string, pos: number[][], extra: Record<string, unknown> = {}) {
  await freshStart(page, query);
  const s = await savedGame(page);
  s.pets.forEach((p: any, i: number) => {
    p.pos = unit(pos[i] ?? [0.3 * i - 0.5, -0.3, -1]);
    p.food = 80;
    p.joy = 50; // below the breeding threshold so courtship doesn't steal them
  });
  Object.assign(s, { savedAt: Date.now(), lastEggAt: Date.now() }, extra);
  await seedSave(page, s);
  return s;
}

test('fresh planet: the diary opens with a first page, and the unread dot clears', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-13');
  const d = await diary(page);
  expect(d.map((e) => e.key)).toEqual(['start', 'season:autumn:2026', 'fest:lantern:2026', undefined, 'seeds:starter']);
  expect(d[0].text).toMatch(/ moved onto the planet$/);
  expect(d[3].text).toMatch(/^Got .*Lantern hat as a Lantern Festival gift$/);
  expect(d[4].text).toBe('Got a starter pack of seeds: 3 strawberry and 2 blueberry');
  await expect(page.locator('#diaryDot')).toBeVisible();
  await page.click('#diaryBtn');
  await expect(page.locator('#diary')).toBeVisible();
  await expect(page.locator('#diaryEntries h3').first()).toHaveText('Today');
  await expect(page.locator('#diaryEntries .entry')).toHaveCount(5);
  await expect(page.locator('#diaryEntries .entry').first()).toContainText('starter pack'); // newest first
  await expect(page.locator('#diaryPairs')).toContainText('No friendships yet');
  await page.keyboard.press('Escape');
  await expect(page.locator('#diary')).toBeHidden();
  await expect(page.locator('#diaryDot')).toBeHidden();
  // Reloading the same day doesn't repeat the season or festival pages.
  await page.reload();
  await ready(page);
  expect((await diary(page)).length).toBe(5);
  expect((await savedGame(page)).version).toBe(4);
  expect(errors).toEqual([]);
});

test('pets that stay near each other become best friends: toast, diary page, hearts in the panel', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  // At night they sleep side by side, so they can't wander apart before the first friendship tick.
  const s = await planet(page, '?time=21:30&weather=clear&date=2026-11-03', [[0, 0.5, 0.86], [0.04, 0.52, 0.85]]);
  const [a, b] = s.pets;
  await seedSave(page, { ...s, savedAt: Date.now(), friends: { [key(a.id, b.id)]: 49.97 }, diary: [] , version: 4 });
  await expect.poll(async () => (await friends(page))[key(a.id, b.id)], { timeout: 60_000 }).toBeGreaterThanOrEqual(50);
  await expect(page.locator('#toast')).toContainText(`${a.name} and ${b.name} became best friends`, { timeout: 10_000 });
  expect((await friends(page))[key(a.id, b.id)]).toBeGreaterThanOrEqual(50);
  const page1 = (await diary(page)).find((e) => e.key === `lvl:${key(a.id, b.id)}:Best friends`)!;
  expect(page1.text).toBe(`${a.name} and ${b.name} became best friends`);
  // The pet panel lists the friend with three hearts; tapping the friend selects them.
  const me = (await pets(page)).find((p) => p.id === a.id)!;
  await page.evaluate((id) => (window as any).__ppp.focus(id), a.id);
  await page.waitForTimeout(400);
  const meNow = (await pets(page)).find((p) => p.id === a.id)!;
  await page.mouse.click(meNow.screen.x, meNow.screen.y);
  await expect(page.locator('#panel')).toBeVisible();
  await expect(page.locator('#petName')).toHaveText(me.name);
  const chip = page.locator(`#petFriends .friend[data-id="${b.id}"]`);
  await expect(chip).toContainText(`${b.name} ♥♥♥`);
  await expect(chip).toHaveAttribute('title', 'Best friends');
  await page.waitForTimeout(800); // pop-in animation
  await page.screenshot({ path: `${SHOTS}/r4-friends-panel.png` });
  await chip.click();
  await expect(page.locator('#petName')).toHaveText(b.name);
  await expect(page.locator(`#petFriends .friend[data-id="${a.id}"]`)).toContainText('♥♥♥');
  await page.click('#close');
  await page.click('#diaryBtn');
  await expect(page.locator('#diaryPairs .pair').first()).toContainText(new RegExp(`${a.name} & ${b.name}|${b.name} & ${a.name}`));
  await expect(page.locator('#diaryPairs .pair').first()).toContainText('Best friends');
  await expect(page.locator('#diaryEntries .entry').first()).toContainText('became best friends');
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOTS}/r4-diary.png` });
  expect(errors).toEqual([]);
});

test('best friends who are far apart go and find each other', async ({ page }) => {
  test.setTimeout(180_000);
  const errors = trackErrors(page);
  const s = await planet(page, '?time=12:00&weather=clear&date=2026-11-03', [[-0.75, 0.3, 0.6], [0.75, 0.3, 0.6]]);
  const [a, b] = s.pets;
  await seedSave(page, { ...s, savedAt: Date.now(), friends: { [key(a.id, b.id)]: 80 }, diary: [], version: 4 });
  const ang = async () => {
    const list = await pets(page);
    const [p, q] = [list.find((x) => x.id === a.id)!, list.find((x) => x.id === b.id)!];
    return Math.acos(Math.min(1, p.pos[0] * q.pos[0] + p.pos[1] * q.pos[1] + p.pos[2] * q.pos[2]));
  };
  expect(await ang()).toBeGreaterThan(1);
  await expect.poll(async () => (await page.evaluate(() => (window as any).__ppp.seeks())).length, { timeout: 60_000 }).toBeGreaterThan(0);
  await expect.poll(async () => (await diary(page)).some((e) => /went looking for best friend/.test(e.text)), { timeout: 110_000, intervals: [1000] }).toBe(true);
  expect(await ang()).toBeLessThan(0.45);
  await page.screenshot({ path: `${SHOTS}/r4-best-friends-meet.png` });
  expect(errors).toEqual([]);
});

test('two pets hang out at the same bench on their own: a diary page and friendship', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  const bench = unit([0, 0.45, 0.9]);
  const s = await planet(page, '?time=12:00&weather=clear&date=2026-11-03', [[0.12, 0.45, 0.88], [-0.12, 0.45, 0.88]], {
    decor: [{ id: 'b1', kind: 'bench', pos: bench, rot: 0 }],
  });
  const [a, b] = s.pets;
  await expect
    .poll(async () => (await diary(page)).find((e) => /hung out by the bench/.test(e.text))?.text, { timeout: 120_000, intervals: [1000] })
    .toMatch(new RegExp(`^(${a.name} and ${b.name}|${b.name} and ${a.name}) hung out by the bench$`));
  expect((await friends(page))[key(a.id, b.id)]).toBeGreaterThan(0.5);
  await page.screenshot({ path: `${SHOTS}/r4-bench-friends.png` });
  expect(errors).toEqual([]);
});

test('evolving (by feeding) and hatching write diary pages; babies start as friends with their parents', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  const s = await planet(page, '?time=12:00&weather=clear&date=2026-11-03', [[0, 0.5, 0.86], [0.5, 0.3, 0.8]]);
  const [a, b] = s.pets;
  s.pets[0].care = 4.8;
  s.pets[0].food = 40;
  s.eggs = [{ id: 'egg1', pos: unit([-0.4, 0.3, 0.86]), hatchAt: Date.now() + 2500, baby: { name: 'Sprinkle', species: 'puff', look: { color: '#ffd6e0', feature: 'mochi' }, parents: [a.name, b.name], parentIds: [a.id, b.id] } }];
  await seedSave(page, { ...s, savedAt: Date.now(), version: 4, diary: [] });
  await expect.poll(async () => (await diary(page)).map((e) => e.text), { timeout: 30_000 }).toContain(`Sprinkle hatched! Welcome, child of ${a.name} & ${b.name}`);
  const f = await friends(page);
  expect(f[key('egg1', a.id)]).toBeGreaterThanOrEqual(25);
  expect(f[key('egg1', b.id)]).toBeGreaterThanOrEqual(25);
  await page.evaluate((id) => (window as any).__ppp.focus(id), a.id);
  await page.waitForTimeout(500);
  const p = (await pets(page)).find((x) => x.id === a.id)!;
  await page.mouse.click(p.screen.x, p.screen.y);
  await expect(page.locator('#petName')).toHaveText(a.name);
  await page.click('#feedBtn');
  await expect.poll(async () => (await diary(page)).some((e) => e.text.startsWith(`${a.name} evolved into Young `)), { timeout: 30_000 }).toBe(true);
  await expect(page.locator(`#petFriends .friend[data-id="egg1"]`)).toContainText('Sprinkle ♥♥');
  expect(errors).toEqual([]);
});

test('old saves: a v3 planet gets a diary and family friendships; junk is dropped and the diary is capped', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-03');
  const s = await savedGame(page);
  const [a, b] = s.pets;
  const child = { ...s.pets[2], id: 'kid1', name: 'Kiddo', parents: [a.name, b.name] };
  const v3 = { ...s, version: 3, savedAt: Date.now(), pets: [a, b, child], friends: undefined, diary: undefined };
  await seedSave(page, v3);
  const d = await diary(page);
  expect(d[0]).toMatchObject({ key: 'start', icon: '📔' });
  expect(d[0].text).toBe(`Started a diary for ${a.name}, ${b.name} and Kiddo`);
  const f = await friends(page);
  expect(f[key('kid1', a.id)]).toBe(30);
  expect(f[key('kid1', b.id)]).toBe(30);
  expect(f[key(a.id, b.id)]).toBeUndefined();
  expect((await savedGame(page)).version).toBe(4);

  const many = Array.from({ length: 130 }, (_, i) => ({ at: Date.now() - (130 - i) * 60_000, icon: '🌸', text: `page ${i}` }));
  await seedSave(page, { ...(await savedGame(page)), savedAt: Date.now(), diary: [...many, { at: 'x', text: 3 }], friends: { [key(a.id, 'ghost')]: 40, [key(a.id, b.id)]: 'lots', [key(a.id, b.id) + 'x']: 5 } });
  const d2 = await diary(page);
  expect(d2.length).toBeLessThanOrEqual(80);
  expect(d2.some((e) => e.text === 'page 129')).toBe(true);
  expect(d2.some((e) => e.text === 'page 0')).toBe(false);
  expect(Object.keys(await friends(page))).toEqual([]);
  await page.click('#diaryBtn');
  await expect(page.locator('#diaryEntries .entry').first()).toBeVisible();
  expect(errors).toEqual([]);
});
