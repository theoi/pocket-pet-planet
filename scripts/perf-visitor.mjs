import { chromium } from 'playwright';
const base = 'http://127.0.0.1:4173/pocket-pet-planet/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const out = {};
for (const [name, q] of [['night-no-visitor', '?time=22:30&weather=clear&date=2026-11-03&visitor=0'], ['night-visitor', '?time=22:30&weather=clear&date=2026-11-03&visitor=1']]) {
  const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
  await p.goto(base + 'blank.html'); await p.evaluate(() => localStorage.clear());
  await p.goto(base + q);
  await p.waitForFunction(() => window.__ppp?.ready);
  if (name === 'night-visitor') await p.waitForFunction(() => window.__ppp.visitor().state === 'here', null, { timeout: 60000 });
  await p.waitForTimeout(1500);
  out[name] = await p.evaluate(() => window.__ppp.perf());
  await p.close();
}
console.log(JSON.stringify(out));
await b.close();
