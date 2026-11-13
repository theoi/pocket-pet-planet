import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto('http://127.0.0.1:4173/pocket-pet-planet/blank.html'); await p.evaluate(() => localStorage.clear());
await p.goto('http://127.0.0.1:4173/pocket-pet-planet/?time=12:00&weather=clear&date=2026-11-03');
await p.waitForFunction(() => window.__ppp?.ready); await p.waitForTimeout(800);
await p.click('#decoBtn'); await p.click('.chip[data-kind="cottage"]');
let placed = 0;
for (const [x, y] of [[640, 400], [560, 330], [720, 470], [560, 470], [720, 330]]) {
  const r = await p.evaluate(([x, y]) => window.__ppp.probe(x, y), [x, y]);
  if (r.hit && !r.problem) { await p.mouse.click(x, y); placed++; await p.waitForTimeout(300); }
  if (placed === 2) break;
}
await p.click('#decoDone'); await p.waitForTimeout(800);
const d = await p.evaluate(() => window.__ppp.decor());
const c = d[0].screen;
await p.screenshot({ path: process.argv[2], clip: { x: Math.max(0, c.x - 220), y: Math.max(0, c.y - 160), width: 440, height: 320 } });
console.log(JSON.stringify(d.map(x => x.screen)));
await b.close();
