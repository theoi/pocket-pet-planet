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
  // Clear storage from a same-origin page that isn't the app, so no pagehide autosave can undo it.
  await page.goto('blank.html');
  await page.evaluate(() => localStorage.clear());
  await page.goto(query);
  await ready(page);
}

export async function ready(page: Page): Promise<void> {
  await page.waitForFunction(() => (window as any).__ppp?.ready === true);
  await page.waitForTimeout(600);
}

/** Replace the saved game before the app boots (a plain reload would let the app's pagehide save overwrite it). */
export async function seedSave(page: Page, data: unknown): Promise<void> {
  const tag = 'seed-' + Math.random().toString(36).slice(2);
  await page.addInitScript(
    ([d, t]) => {
      if (sessionStorage.getItem(t as string)) return;
      sessionStorage.setItem(t as string, '1');
      localStorage.setItem('pocket-pet-planet:v1', JSON.stringify(d));
    },
    [data, tag] as const,
  );
  await page.reload();
  await ready(page);
}

export const savedGame = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')!));

/** Screen points on the planet where a decoration may go, nearest the middle first. */
export async function validSpots(page: Page, avoid: { x: number; y: number }[] = [], minGap = 70): Promise<{ x: number; y: number }[]> {
  const vp = page.viewportSize()!;
  const out: { x: number; y: number }[] = [];
  const cx = vp.width / 2, cy = vp.height / 2;
  for (let y = cy - 160; y <= cy + 160; y += 40)
    for (let x = cx - 200; x <= cx + 200; x += 40) {
      if (y < 80 || y > vp.height - 170) continue;
      const r = await page.evaluate(([x, y]) => (window as any).__ppp.probe(x, y), [x, y]);
      if (r.hit && !r.problem) out.push({ x, y });
    }
  const far = (p: { x: number; y: number }, list: { x: number; y: number }[]) => list.every((q) => Math.hypot(p.x - q.x, p.y - q.y) >= minGap);
  return out.filter((p) => far(p, avoid)).sort((a, b) => Math.hypot(a.x - cx, a.y - cy) - Math.hypot(b.x - cx, b.y - cy));
}

export const decor = (page: Page) => page.evaluate(() => (window as any).__ppp.decor()) as Promise<any[]>;

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
