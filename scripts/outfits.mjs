import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1000, height: 640 } });
const base = 'http://127.0.0.1:4173/pocket-pet-planet/';
await p.goto(base + 'blank.html');
const outfits = [{ head: 'pumpkinhat', neck: 'leafscarf' }, { head: 'lanternhat', neck: 'fairylights' }, { head: 'acorn', neck: 'daisychain' }, { head: 'earmuffs' }];
await p.evaluate((outfits) => {
  const pets = ['mochi','puff','bloop','sprout'].map((s, i) => ({ id: 'p'+i, name: 'P'+i, species: s, stage: i === 1 ? 1 : 0, food: 70, joy: 70, care: 0, pos: [(i - 1.5) * 0.3, 0.62, 0.72 + (i % 2) * 0.06], wear: outfits[i] }));
  localStorage.setItem('pocket-pet-planet:v1', JSON.stringify({ version: 3, savedAt: Date.now(), pets, eggs: [], snacks: 0, totalCare: 0, lastEggAt: 0, outfits: ['pumpkinhat','leafscarf','lanternhat','fairylights','acorn','daisychain','earmuffs'] }));
}, outfits);
await p.goto(base + '?time=12:00&weather=clear&date=2026-11-13');
await p.waitForFunction(() => window.__ppp?.ready);
await p.evaluate(() => window.__ppp.focus([0, 0.12, 1], 7.2));
await p.waitForTimeout(1500);
await p.screenshot({ path: process.argv[2] });
await b.close();
