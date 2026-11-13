import { chromium } from 'playwright';
const base = 'http://127.0.0.1:4173/pocket-pet-planet/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(base + 'blank.html'); await p.evaluate(() => localStorage.clear());
await p.goto(base + '?time=12:00&weather=clear&date=2026-11-03');
await p.waitForFunction(() => window.__ppp?.ready); await p.waitForTimeout(1500);
const before = await p.evaluate(() => window.__ppp.perf());
const s = await p.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')));
const kinds = ['strawberry', 'blueberry', 'sunpeach'];
s.decor = []; s.garden = { seeds: {}, plots: {} };
for (let i = 0; i < 24; i++) {
  const z = 1 - (2 * (i + 0.5)) / 24, a = i * 2.39996, r = Math.sqrt(1 - z * z);
  const id = 'p' + i;
  s.decor.push({ id, kind: 'plot', pos: [r * Math.cos(a), z, r * Math.sin(a)], rot: 0 });
  s.garden.plots[id] = { seed: kinds[i % 3], grown: 100, at: Date.now(), wetUntil: 0 };
}
s.savedAt = Date.now();
await p.addInitScript((d) => {
  if (sessionStorage.getItem('seeded')) return;
  sessionStorage.setItem('seeded', '1');
  localStorage.setItem('pocket-pet-planet:v1', JSON.stringify(d));
}, s);
await p.reload();
await p.waitForFunction(() => window.__ppp?.ready); await p.waitForTimeout(1500);
const after = await p.evaluate(() => window.__ppp.perf());
console.log(JSON.stringify({ before, after, plots: (await p.evaluate(() => window.__ppp.garden())).plots.length }));
await p.screenshot({ path: 'shots/tests/r4-garden-full.png' });
await b.close();
