import { chromium } from '@playwright/test';
const url = process.argv[2] ?? 'http://127.0.0.1:4173/pocket-pet-planet/?time=12:00&weather=clear';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(url);
await p.waitForFunction(() => window.__ppp?.ready);
await p.waitForTimeout(1500);
console.log(JSON.stringify(await p.evaluate(() => window.__ppp.perf())));
await b.close();
