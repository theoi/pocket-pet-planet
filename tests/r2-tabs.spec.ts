import { expect, test } from '@playwright/test';
import { freshStart, pets, ready, savedGame, selectVisiblePet } from './helpers';

test('a second tab does not get its newer save overwritten by the first', async ({ page, context }) => {
  await freshStart(page, '?time=12:00&weather=clear');
  const tabB = await context.newPage();
  await tabB.goto('?time=12:00&weather=clear');
  await ready(tabB);
  // B's first save tells A to stop saving.
  await expect(page.locator('#staleBanner')).toBeVisible();
  expect(await page.evaluate(() => (window as any).__ppp.saving())).toBe(false);
  expect(await tabB.evaluate(() => (window as any).__ppp.saving())).toBe(true);

  const pet = await selectVisiblePet(tabB);
  await tabB.click('#renameBtn');
  await tabB.fill('#renameInput', 'FromTabB');
  await tabB.press('#renameInput', 'Enter');
  await page.waitForTimeout(3500); // A's autosave interval passes
  expect((await savedGame(page)).pets.find((p: any) => p.id === pet.id).name).toBe('FromTabB');

  // "Continue here" reloads A with B's data, and now B is the parked one.
  await page.click('#staleReload');
  await ready(page);
  expect((await pets(page)).find((p) => p.id === pet.id)!.name).toBe('FromTabB');
  await expect(tabB.locator('#staleBanner')).toBeVisible();
  await expect(page.locator('#staleBanner')).toBeHidden();
});
