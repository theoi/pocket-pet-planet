import { expect, test, type Page } from '@playwright/test';
import { freshStart, pets, selectVisiblePet, SHOTS, trackErrors } from './helpers';

test.use({ viewport: { width: 844, height: 390 } });

async function expectInViewport(page: Page, sel: string) {
  const b = (await page.locator(sel).boundingBox())!;
  expect(b.y).toBeGreaterThanOrEqual(0);
  expect(b.x).toBeGreaterThanOrEqual(0);
  expect(b.y + b.height).toBeLessThanOrEqual(390);
  expect(b.x + b.width).toBeLessThanOrEqual(844);
  return b;
}

async function expectPetClearOfPanel(page: Page, id: string) {
  const panel = (await page.locator('#panel').boundingBox())!;
  const p = (await pets(page)).find((x) => x.id === id)!;
  expect(p.screen.x).toBeGreaterThan(20);
  expect(p.screen.y).toBeGreaterThan(20);
  expect(p.screen.y).toBeLessThan(370);
  // The pet (with ~30px of body around its centre) is left of the docked panel.
  expect(p.screen.x + 30).toBeLessThan(panel.x);
}

test('landscape phone: compact docked panel fits; selected pet stays visible beside it', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00&weather=clear');
  const pet = await selectVisiblePet(page, true);
  await page.waitForTimeout(1200); // planet slides left of the panel
  const box = await expectInViewport(page, '#panel');
  expect(box.x).toBeGreaterThan(844 / 2); // docked on the right, not covering the middle
  // Nothing in the top bar overlaps the title (hidden while docked) or the panel.
  await expect(page.locator('h1')).toBeHidden();
  const bar = (await page.locator('#topbar').boundingBox())!;
  expect(bar.x + bar.width).toBeLessThan(box.x);
  await expectPetClearOfPanel(page, pet.id);
  await page.screenshot({ path: `${SHOTS}/r2-landscape-panel.png` });

  await page.tap('#renameBtn');
  await expect(page.locator('#renameInput')).toBeVisible();
  await expectInViewport(page, '#panel');
  await expectInViewport(page, '#renameInput');
  await page.screenshot({ path: `${SHOTS}/r2-landscape-rename.png` });
  await page.fill('#renameInput', 'Sideways');
  await page.tap('#renameForm button');
  await expect(page.locator('#petName')).toHaveText('Sideways');

  await page.tap('#wearBtn');
  await expect(page.locator('#wardrobe')).toBeVisible();
  await expectInViewport(page, '#panel');
  // Every action button is reachable inside the panel.
  for (const id of ['#feedBtn', '#treatBtn', '#petBtn', '#wearBtn', '#renameBtn']) {
    await page.locator(id).scrollIntoViewIfNeeded();
    await expectInViewport(page, id);
  }
  const food0 = (await pets(page)).find((p) => p.id === pet.id)!.food;
  await page.tap('#feedBtn');
  await expect.poll(async () => (await pets(page)).find((p) => p.id === pet.id)!.food).toBeGreaterThan(food0);
  await expectPetClearOfPanel(page, pet.id);

  // Closing the panel recentres the planet.
  await page.tap('#close');
  await page.waitForTimeout(1200);
  const list = await pets(page);
  const xs = list.filter((p) => p.visible).map((p) => p.screen.x);
  expect(Math.min(...xs) + Math.max(...xs)).toBeGreaterThan(844 * 0.7); // spread around the true centre again
  expect(errors).toEqual([]);
});
