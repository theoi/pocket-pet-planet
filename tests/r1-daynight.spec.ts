import { expect, test } from '@playwright/test';
import { angle, freshStart, pets, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const sky = (page: import('@playwright/test').Page) =>
  page.evaluate(() => (window as any).__ppp.sky()) as Promise<{ hour: number; night: number; fireflies: number }>;

test('night (?time=22:00): dark sky, fireflies, pets asleep with zzz; feeding wakes one', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=22:00&weather=clear');
  const s = await sky(page);
  expect(s.hour).toBe(22);
  expect(s.night).toBe(1);
  expect(s.fireflies).toBeGreaterThan(0);
  await expect(page.locator('#clock')).toContainText('22:00');
  await expect(page.locator('#clock')).toContainText('🌙');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundImage)).toContain('rgb(28, 29, 74)');
  await page.waitForTimeout(1500);
  const a = await pets(page);
  expect(a.every((p: any) => p.sleeping)).toBe(true);
  await page.waitForTimeout(4000);
  const b = await pets(page);
  for (let i = 0; i < a.length; i++) expect(angle(a[i].pos, b[i].pos)).toBeLessThan(0.01);

  const pet = await selectVisiblePet(page);
  await expect(page.locator('#moodLabel')).toHaveText('Sleeping');
  await page.screenshot({ path: `${SHOTS}/r1-night.png` });
  await page.click('#feedBtn');
  await expect.poll(async () => (await pets(page)).find((p: any) => p.id === pet.id)!.sleeping).toBe(false);
  expect(errors).toEqual([]);
});

test('day (?time=12:00) and dusk (?time=19:00) skies', async ({ page }) => {
  await freshStart(page, '?time=12:00&weather=clear');
  let s = await sky(page);
  expect(s.night).toBe(0);
  expect(s.fireflies).toBe(0);
  await expect(page.locator('#clock')).toContainText('☀️ 12:00');
  expect((await pets(page)).some((p: any) => p.sleeping)).toBe(false);

  await page.goto('?time=19:00&weather=clear');
  await page.waitForFunction(() => (window as any).__ppp?.ready === true);
  s = await sky(page);
  expect(s.night).toBeGreaterThan(0.2);
  expect(s.night).toBeLessThan(0.8);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOTS}/r1-dusk.png` });
});

test('without ?time the sky follows the real local clock', async ({ page }) => {
  await page.clock.setFixedTime(new Date(2026, 10, 13, 23, 30));
  await freshStart(page);
  const s = await sky(page);
  expect(Math.floor(s.hour)).toBe(23);
  expect(s.night).toBe(1);
  await page.clock.setFixedTime(new Date(2026, 10, 13, 10, 0));
  await page.reload();
  await page.waitForFunction(() => (window as any).__ppp?.ready === true);
  expect((await sky(page)).night).toBe(0);
});
