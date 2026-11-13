import { expect, test, type Page } from '@playwright/test';
import { freshStart, pets, savedGame, seedSave, SHOTS, trackErrors } from './helpers';

const key = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

test('phone: diary and friends by touch; the diary scrolls with a finger', async ({ page }) => {
  test.setTimeout(120_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear&date=2026-11-13');
  const s = await savedGame(page);
  const [a, b, c] = s.pets;
  const pages = Array.from({ length: 40 }, (_, i) => ({ at: Date.now() - (40 - i) * 3600_000, icon: i % 2 ? '😴' : '🌼', text: `${a.name} and ${b.name} ${i % 2 ? 'napped together in the cottage' : 'hung out by the bench'}` }));
  await seedSave(page, { ...s, savedAt: Date.now(), friends: { [key(a.id, b.id)]: 70, [key(a.id, c.id)]: 30 }, diary: pages });
  await page.tap('#diaryBtn');
  await expect(page.locator('#diary')).toBeVisible();
  const card = (await page.locator('.diary-card').boundingBox())!;
  expect(card.x).toBeGreaterThanOrEqual(0);
  expect(card.x + card.width).toBeLessThanOrEqual(390);
  expect(card.y + card.height).toBeLessThanOrEqual(844);
  await expect(page.locator('#diaryPairs .pair')).toHaveCount(2);
  await expect(page.locator('#diaryEntries h3', { hasText: 'Yesterday' })).toHaveCount(1);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOTS}/r4-diary-mobile.png` });
  const list = page.locator('#diaryEntries');
  const box = (await list.boundingBox())!;
  const cdp = await page.context().newCDPSession(page);
  const pt = (y: number) => [{ x: box.x + box.width / 2, y, id: 0, radiusX: 3, radiusY: 3, force: 1 }];
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(box.y + box.height - 20) });
  for (let i = 1; i <= 10; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(box.y + box.height - 20 - i * 25) });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect.poll(() => list.evaluate((e) => e.scrollTop)).toBeGreaterThan(50);
  await page.tap('#diaryClose');
  await expect(page.locator('#diary')).toBeHidden();

  await page.evaluate((id) => (window as any).__ppp.focus(id), a.id);
  await page.waitForTimeout(600);
  const p = (await pets(page)).find((x) => x.id === a.id)!;
  await page.touchscreen.tap(p.screen.x, p.screen.y);
  await expect(page.locator('#petName')).toHaveText(a.name);
  const chips = page.locator('#petFriends .friend');
  await expect(chips).toHaveCount(2);
  await expect(chips.first()).toContainText(`${b.name} ♥♥♥`); // best friend first
  await expect(chips.nth(1)).toContainText(`${c.name} ♥♥♡`);
  const panel = (await page.locator('#panel').boundingBox())!;
  expect(panel.y + panel.height).toBeLessThanOrEqual(844);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOTS}/r4-friends-mobile.png` });
  await chips.first().tap();
  await expect(page.locator('#petName')).toHaveText(b.name);
  expect(errors).toEqual([]);
});
