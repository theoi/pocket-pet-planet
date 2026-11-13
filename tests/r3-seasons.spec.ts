import { expect, test, type Page } from '@playwright/test';
import { freshStart, ready, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const season = (page: Page) => page.evaluate(() => (window as any).__ppp.season()) as Promise<any>;

test('today (no override) follows the real calendar: mid-November is autumn with pumpkins and falling leaves', async ({ page }) => {
  await page.clock.setFixedTime(new Date(2026, 10, 3, 12, 0)); // 3 Nov: autumn, no festival
  await freshStart(page, '?time=12:00&weather=clear');
  const s = await season(page);
  expect(s.season).toBe('autumn');
  expect(s.festival).toBeNull();
  expect(s.props).toContain('pumpkin');
  expect(s.props).toContain('leaves');
  expect(s.decor).toContain('falling-leaves');
  await expect(page.locator('#seasonBadge')).toHaveText('🍂 Autumn');
});

for (const [date, name, badge, prop, gift] of [
  ['2026-04-20', 'spring', '🌸 Spring', 'tulips', 'sakura'],
  ['2026-07-10', 'summer', '🌻 Summer', 'sunflower', 'sunhat'],
  ['2026-10-05', 'autumn', '🍂 Autumn', 'pumpkin', 'acorn'],
  ['2027-01-20', 'winter', '❄️ Winter', 'snowman', 'earmuffs'],
] as const) {
  test(`?date=${date} → ${name}: seasonal scenery, badge, and a seasonal outfit gift`, async ({ page }) => {
    const errors = trackErrors(page);
    await freshStart(page, `?time=12:00&weather=clear&date=${date}`);
    const s = await season(page);
    expect(s.season).toBe(name);
    expect(s.festival).toBeNull();
    expect(s.props).toContain(prop);
    expect(s.outfits).toContain(gift);
    await expect(page.locator('#seasonBadge')).toHaveText(badge);
    await expect(page.locator('#toast')).toContainText('Gift');
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${SHOTS}/r3-season-${name}.png` });
    expect(errors).toEqual([]);
  });
}

test('Lantern Festival (Nov 8–16, so on right now): floating lanterns, festival outfit, glowing at night', async ({ page }) => {
  await freshStart(page, '?time=21:30&weather=clear&date=2026-11-13');
  const s = await season(page);
  expect(s.season).toBe('autumn');
  expect(s.festival).toBe('lantern');
  expect(s.decor).toContain('floating-lanterns');
  expect(s.outfits).toEqual(expect.arrayContaining(['lanternhat', 'acorn', 'leafscarf']));
  await expect(page.locator('#seasonBadge')).toHaveText('🏮 Lantern Festival');
  await expect(page.locator('#toast')).toContainText('Lantern Festival is on!');
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${SHOTS}/r3-lantern-festival.png` });
});

test('other festivals on their real dates', async ({ page }) => {
  for (const [date, id, decor] of [
    ['2026-04-05', 'blossom', 'bunting'],
    ['2026-06-21', 'midsummer', 'bunting'],
    ['2026-10-31', 'pumpkin', 'glowing-pumpkins'],
    ['2026-12-24', 'winterlights', 'fairy-lights'],
    ['2027-01-01', 'winterlights', 'fairy-lights'],
  ] as const) {
    await freshStart(page, `?time=12:00&weather=clear&date=${date}`);
    const s = await season(page);
    expect(s.festival, date).toBe(id);
    expect(s.decor, date).toContain(decor);
  }
  await page.screenshot({ path: `${SHOTS}/r3-winter-lights.png` });
  await freshStart(page, '?time=12:00&weather=clear&date=2026-10-31');
  await page.screenshot({ path: `${SHOTS}/r3-pumpkin-night.png` });
});

test('seasonal gifts are kept after the season ends and can be worn', async ({ page }) => {
  await freshStart(page, '?time=12:00&weather=clear&date=2026-10-31');
  expect((await season(page)).outfits).toContain('pumpkinhat');
  await page.goto('?time=12:00&weather=clear&date=2027-03-10');
  await ready(page);
  const s = await season(page);
  expect(s.season).toBe('spring');
  expect(s.outfits).toEqual(expect.arrayContaining(['pumpkinhat', 'acorn', 'sakura']));
  const pet = await selectVisiblePet(page);
  await page.click('#wearBtn');
  await expect(page.locator('.chip[data-id="pumpkinhat"]')).toBeEnabled();
  await expect(page.locator('.chip[data-id="earmuffs"]')).toBeDisabled();
  await expect(page.locator('.chip[data-id="earmuffs"]')).toContainText('Winter');
  await page.click('.chip[data-id="pumpkinhat"]');
  const wear = await page.evaluate((id) => (window as any).__ppp.pets().find((p: any) => p.id === id).wear, pet.id);
  expect(wear.head).toBe('pumpkinhat');
  await page.evaluate((id) => (window as any).__ppp.focus(id, 4.2), pet.id);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${SHOTS}/r3-seasonal-outfit.png` });
});

test('winter weather schedule is snowy; summer never snows', async ({ page }) => {
  await freshStart(page, '?time=12:00&date=2027-01-20');
  const { scheduledKind } = await import('../src/weather');
  let snowW = 0, snowS = 0;
  for (let seg = 0; seg < 400; seg++) {
    if (scheduledKind(seg, 0, 'winter') === 'snow') snowW++;
    if (scheduledKind(seg, 0, 'summer') === 'snow') snowS++;
  }
  expect(snowW).toBeGreaterThan(100);
  expect(snowS).toBe(0);
});
