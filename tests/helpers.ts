import { expect, type Page } from '@playwright/test';

export interface PetView {
  id: string;
  name: string;
  stage: number;
  food: number;
  joy: number;
  care: number;
  pos: [number, number, number];
  visible: boolean;
  evolving: boolean;
  screen: { x: number; y: number };
}

export const SHOTS = process.env.PPP_SHOTS ?? 'shots/tests';

export function trackErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(String(e)));
  return errors;
}

/** Open the app on a brand-new planet (no saved progress). */
export async function freshStart(page: Page, query = ''): Promise<void> {
  await page.goto(query);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await ready(page);
}

export async function ready(page: Page): Promise<void> {
  await page.waitForFunction(() => (window as any).__ppp?.ready === true);
  await page.waitForTimeout(600);
}

export const pets = (page: Page) => page.evaluate(() => (window as any).__ppp.pets()) as Promise<PetView[]>;
export const cameraPos = (page: Page) => page.evaluate(() => (window as any).__ppp.camera()) as Promise<number[]>;
export const selectedId = (page: Page) => page.evaluate(() => (window as any).__ppp.selected()) as Promise<string | null>;

export function angle(a: number[], b: number[]): number {
  const la = Math.hypot(...a), lb = Math.hypot(...b);
  const d = (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (la * lb);
  return Math.acos(Math.min(1, Math.max(-1, d)));
}

/** Pick a pet facing the camera and clear of the HUD, then click/tap it until it's selected. */
export async function selectVisiblePet(page: Page, tap = false): Promise<PetView> {
  const vp = page.viewportSize()!;
  for (let attempt = 0; attempt < 12; attempt++) {
    const list = await pets(page);
    const panelOpen = await page.locator('#panel').isVisible();
    const target = list
      .filter((p) => p.visible && p.screen.y > 90 && p.screen.y < vp.height - (panelOpen ? 330 : 20) && p.screen.x > 20 && p.screen.x < vp.width - 20)
      .sort((a, b) => Math.abs(a.screen.x - vp.width / 2) - Math.abs(b.screen.x - vp.width / 2))[0];
    if (target) {
      if (tap) await page.touchscreen.tap(target.screen.x, target.screen.y);
      else await page.mouse.click(target.screen.x, target.screen.y);
      await page.waitForTimeout(250);
      if ((await selectedId(page)) === target.id) {
        await expect(page.locator('#panel')).toBeVisible();
        return target;
      }
    }
    await page.waitForTimeout(700);
  }
  throw new Error(`could not select a visible pet: ${JSON.stringify((await pets(page)).map((p) => [p.visible, p.screen]))}`);
}
