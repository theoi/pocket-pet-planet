import { expect, test, type Page } from '@playwright/test';
import { freshStart, pets, ready, selectVisiblePet, SHOTS, trackErrors } from './helpers';

const mini = (page: Page) => page.evaluate(() => (window as any).__ppp.minigame()) as Promise<any>;
const game = (page: Page) => page.evaluate(() => (window as any).__ppp.game()) as Promise<any>;

/** Chase the lowest fruit until the round ends; `move(x)` steers with the real input device. */
async function playRound(page: Page, move: (x: number) => Promise<void>, shot?: string) {
  let shotTaken = false;
  for (let i = 0; i < 1200; i++) {
    const s = await mini(page);
    if (!s || s.phase === 'done') break;
    const next = s.fruits.filter((f: any) => f.y < s.catchY).sort((a: any, b: any) => b.y - a.y)[0];
    if (next) await move(next.x);
    if (shot && !shotTaken && s.caught >= 3 && s.fruits.length >= 2) {
      await page.screenshot({ path: shot });
      shotTaken = true;
    }
    await page.waitForTimeout(30);
  }
}

test('desktop: fruit catch with the mouse earns snacks; treats spend them', async ({ page }) => {
  test.setTimeout(150_000);
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00');
  await expect(page.locator('#snackCount')).toHaveText('0');
  const pet = await selectVisiblePet(page);
  await expect(page.locator('#treatBtn')).toBeDisabled();
  await page.click('#playBtn');
  await expect(page.locator('#game')).toBeVisible();
  await expect(page.locator('#gameTitle')).toHaveText(`Fruit Catch with ${pet.name}`);
  await page.click('#gameStart');
  const t0 = Date.now();
  await playRound(page, (x) => page.mouse.move(x, 500), `${SHOTS}/r1-minigame.png`);
  const s = await mini(page);
  expect(s.phase).toBe('done');
  expect(Date.now() - t0).toBeGreaterThan(25_000);
  expect(s.caught).toBeGreaterThanOrEqual(5);
  expect(s.score).toBeGreaterThanOrEqual(s.caught);
  expect(s.reward).toBe(Math.min(10, Math.ceil(s.score / 3)));
  await expect(page.locator('#gameReward')).toContainText(`+${s.reward} snack`);
  // Round 4: a good round (4+ snacks) also finds a garden seed.
  const seeds = await page.evaluate(() => Object.values((window as any).__ppp.garden().seeds).reduce((a: number, b: any) => a + b, 0));
  expect(seeds).toBe(5 + (s.reward >= 4 ? 1 : 0)); // the starter pack has 5
  if (s.reward >= 4) await expect(page.locator('#gameReward')).toContainText('seed');
  await page.screenshot({ path: `${SHOTS}/r1-minigame-end.png` });
  await page.click('#gameDone');
  await expect(page.locator('#game')).toBeHidden();
  await expect(page.locator('#snackCount')).toHaveText(String(s.reward));
  expect((await game(page)).snacks).toBe(s.reward);

  // Snacks survive a reload, then a treat spends one.
  await page.reload();
  await ready(page);
  await expect(page.locator('#snackCount')).toHaveText(String(s.reward));
  const p2 = await selectVisiblePet(page);
  await expect(page.locator('#treatBtn')).toBeEnabled();
  const before = (await pets(page)).find((p) => p.id === p2.id)!;
  await page.click('#treatBtn');
  await expect(page.locator('.floater', { hasText: 'Sweet treat' })).toBeVisible();
  const after = (await pets(page)).find((p) => p.id === p2.id)!;
  expect(after.care).toBe(before.care + 1.5);
  expect((await game(page)).snacks).toBe(s.reward - 1);
  await expect(page.locator('#snackCount')).toHaveText(String(s.reward - 1));
  expect(errors).toEqual([]);
});

test('Escape and × leave the game without awarding anything', async ({ page }) => {
  await freshStart(page, '?time=12:00');
  await page.click('#playBtn');
  await page.click('#gameStart');
  await page.waitForTimeout(1500);
  await page.keyboard.press('Escape');
  await expect(page.locator('#game')).toBeHidden();
  expect((await game(page)).snacks).toBe(0);
  await page.click('#playBtn');
  await page.click('#gameClose');
  await expect(page.locator('#game')).toBeHidden();
});
