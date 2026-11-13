import { chromium } from '@playwright/test';
const url = process.argv[2];
const out = process.argv[3];
const w = Number(process.argv[4] || 1280), h = Number(process.argv[5] || 800);
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: w, height: h } });
const errs = [];
page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
page.on('pageerror', (e) => errs.push(String(e)));
await page.goto(url);
await page.waitForFunction(() => window.__ppp?.ready);
await page.waitForTimeout(2500);
if (process.argv[6] === 'select') {
  const pets = await page.evaluate(() => window.__ppp.pets());
  const p = pets.find((x) => x.visible);
  await page.mouse.click(p.screen.x, p.screen.y);
  await page.waitForTimeout(800);
}
await page.screenshot({ path: out });
console.log('errors:', JSON.stringify(errs));
await browser.close();
