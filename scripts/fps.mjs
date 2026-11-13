import { chromium } from '@playwright/test';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const [w,h,dsf] of [[1280,800,1],[390,844,2]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dsf });
  await page.goto('http://127.0.0.1:4173/pocket-pet-planet/');
  await page.waitForFunction(() => window.__ppp?.ready);
  const fps = await page.evaluate(() => new Promise(r => { let n=0; const t0=performance.now(); const f=()=>{ n++; if (performance.now()-t0<3000) requestAnimationFrame(f); else r(n/3); }; requestAnimationFrame(f); }));
  const pets = await page.evaluate(() => window.__ppp.pets().map(p => [p.visible, Math.round(p.screen.x), Math.round(p.screen.y)]));
  console.log(w, h, 'fps', fps, JSON.stringify(pets));
}
await browser.close();
