import { chromium } from 'playwright';
const base = 'http://127.0.0.1:4173/pocket-pet-planet/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
async function seeded(q, mut, shot, focus) {
  const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
  await p.goto(base + 'blank.html'); await p.evaluate(() => localStorage.clear());
  await p.goto(base + q); await p.waitForFunction(() => window.__ppp?.ready);
  const s = await p.evaluate(() => JSON.parse(localStorage.getItem('pocket-pet-planet:v1')));
  mut(s); s.savedAt = Date.now();
  await p.addInitScript((d) => { if (!sessionStorage.getItem('seeded')) { sessionStorage.setItem('seeded', '1'); localStorage.setItem('pocket-pet-planet:v1', JSON.stringify(d)); } }, s);
  await p.reload(); await p.waitForFunction(() => window.__ppp?.ready);
  if (focus) await p.evaluate(focus);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: shot });
  await p.close();
}
const u = (v) => { const l = Math.hypot(...v); return v.map((c) => c / l); };
// Default zoom: an empty plot and a sprouting plot.
await seeded('?time=12:00&weather=clear&date=2026-11-03', (s) => {
  s.decor = [{ id: 'p1', kind: 'plot', pos: u([-0.25, 0.35, 0.9]), rot: 0 }, { id: 'p2', kind: 'plot', pos: u([0.25, 0.35, 0.9]), rot: 0 }];
  s.garden = { seeds: {}, plots: { p1: { grown: 0, at: Date.now(), wetUntil: 0 }, p2: { seed: 'strawberry', grown: 2, at: Date.now(), wetUntil: 0 } } };
  s.pets.forEach((x) => (x.pos = u([0, -0.6, -1])));
}, 'shots/tests/r4-plots-default-zoom.png');
// Night: sleeping pets wearing caps, default camera.
await seeded('?time=23:00&weather=clear&date=2026-11-03', (s) => {
  const w = [{ head: 'cometcap' }, { head: 'crown' }, { head: 'moonhalo' }, { head: 'acorn', neck: 'stardust' }];
  s.pets.forEach((x, i) => (x.wear = w[i]));
  s.outfits = [...(s.outfits ?? []), 'cometcap', 'moonhalo', 'stardust'];
  s.totalCare = 40;
}, 'shots/tests/r4-night-caps.png');
await b.close();
