import { chromium } from '@playwright/test';
const base = process.argv[2] ?? 'http://127.0.0.1:4173/pocket-pet-planet/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(base + 'blank.html');
await p.evaluate(() => {
  const sp = ['mochi','puff','bloop','sprout'];
  const heads = ['bow','party','beanie','flowers','crown','wizard','pumpkinhat','lanternhat'];
  const necks = ['scarf','bowtie','bell','leafscarf','fairylights'];
  const rnd = (i) => { const a = i * 2.39996, z = 1 - (i + 0.5) / 12 * 2, r = Math.sqrt(1 - z*z); return [Math.cos(a)*r, z, Math.sin(a)*r]; };
  const pets = Array.from({ length: 12 }, (_, i) => ({ id: 'p'+i, name: 'P'+i, species: sp[i%4], stage: i%3, food: 80, joy: 80, care: 0, pos: rnd(i), wear: { head: heads[i%8], neck: necks[i%5] }, ...(i>3 ? { look: { color: '#ffd0e0', feature: sp[(i+1)%4], spots: '#ffad7a' } } : {}) }));
  const kinds = ['cottage','shroomhouse','lantern','flowerbed','bench','well'];
  const decor = Array.from({ length: 24 }, (_, i) => { const a = i * 2.39996 + 1, z = 1 - (i + 0.5) / 24 * 2, r = Math.sqrt(1 - z*z); return { id: 'd'+i, kind: kinds[i%6], pos: [Math.cos(a)*r, z, Math.sin(a)*r], rot: i }; });
  localStorage.setItem('pocket-pet-planet:v1', JSON.stringify({ version: 3, savedAt: Date.now(), pets, eggs: [], snacks: 0, totalCare: 50, lastEggAt: Date.now(), decor, outfits: ['pumpkinhat','lanternhat','leafscarf','fairylights'] }));
});
const res = {};
for (const [name, q] of [['autumn-lantern-night-rain', '?time=21:30&weather=rain&date=2026-11-13'], ['winter-lights-snow', '?time=12:00&weather=snow&date=2026-12-24'], ['spring-blossom', '?time=12:00&weather=clear&date=2026-04-05']]) {
  await p.goto(base + q);
  await p.waitForFunction(() => window.__ppp?.ready);
  await p.waitForTimeout(1500);
  res[name] = await p.evaluate(() => window.__ppp.perf());
  if (name.startsWith('autumn')) await p.screenshot({ path: process.argv[3] ?? 'shots/busy.png' });
}
console.log(JSON.stringify(res, null, 1));
await b.close();
