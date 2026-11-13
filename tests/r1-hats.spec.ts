import { expect, test } from '@playwright/test';
import { freshStart, pets, ready, savedGame, seedSave, selectVisiblePet, SHOTS, trackErrors } from './helpers';

test('care unlocks outfits; equip, swap, unequip per pet; outfits persist', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?debug=1&time=12:00');
  const pet = await selectVisiblePet(page);
  await page.click('#wearBtn');
  await expect(page.locator('#wardrobe')).toBeVisible();
  await expect(page.locator('.chip[data-id="bow"]')).toBeDisabled();
  await expect(page.locator('.chip[data-id="bow"]')).toContainText('2 care');

  for (let i = 0; i < 2; i++) {
    await page.click('#dbgFF');
    await page.click('#feedBtn');
    await page.waitForTimeout(600);
  }
  await expect(page.locator('#toast')).toContainText('Bow');
  await expect(page.locator('.chip[data-id="bow"]')).toBeEnabled();
  await expect(page.locator('.chip[data-id="party"]')).toBeDisabled();

  await page.click('.chip[data-id="bow"]');
  await expect(page.locator('.chip[data-id="bow"]')).toHaveClass(/on/);
  expect((await pets(page)).find((p) => p.id === pet.id)!.wear).toEqual({ head: 'bow' });
  // Other pets are unaffected.
  expect((await pets(page)).filter((p) => p.id !== pet.id).every((p) => !p.wear.head)).toBe(true);

  await page.reload();
  await ready(page);
  expect((await pets(page)).find((p) => p.id === pet.id)!.wear).toEqual({ head: 'bow' });
  expect(await page.evaluate(() => (window as any).__ppp.unlocked())).toEqual(['bow']);

  // Unequip by tapping it again.
  await page.evaluate((id) => (window as any).__ppp.focus(id), pet.id);
  await page.waitForTimeout(800);
  const again = (await pets(page)).find((p) => p.id === pet.id)!;
  await page.mouse.click(again.screen.x, again.screen.y);
  await expect(page.locator('#petName')).toHaveText(pet.name);
  await page.click('#wearBtn');
  await page.click('.chip[data-id="bow"]');
  expect((await pets(page)).find((p) => p.id === pet.id)!.wear).toEqual({});
  expect(errors).toEqual([]);
});

test('a fully dressed planet (all outfits unlocked)', async ({ page }) => {
  const errors = trackErrors(page);
  await freshStart(page, '?time=12:00');
  const s = await savedGame(page);
  const outfits = [
    { head: 'party', neck: 'scarf' },
    { head: 'crown', neck: 'bell' },
    { head: 'wizard', neck: 'bowtie' },
    { head: 'flowers' },
  ];
  s.pets.forEach((p: any, i: number) => {
    p.wear = outfits[i];
    // Line them up along the "top" rim of the planet so the camera sees them side-on.
    p.pos = [(i - 1.5) * 0.3, 0.62, 0.72 + (i % 2) * 0.06];
  });
  s.pets[2].stage = 2;
  s.totalCare = 40;
  s.savedAt = Date.now();
  await seedSave(page, s);
  const list = await pets(page);
  expect(list.map((p) => p.wear)).toEqual(outfits);
  await page.evaluate(() => (window as any).__ppp.focus([0, 0.12, 1], 7.2));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${SHOTS}/r1-hats.png` });

  await selectVisiblePet(page);
  await page.click('#wearBtn');
  // All care outfits are unlocked; only other seasons' gifts remain as locked teasers.
  await expect(page.locator('.chip:not(.seasonal):disabled')).toHaveCount(0);
  await expect(page.locator('#wardrobeNote')).toContainText('everything unlocked');
  await page.click('.chip[data-id="beanie"]');
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${SHOTS}/r1-wardrobe.png` });
  expect(errors).toEqual([]);
});
