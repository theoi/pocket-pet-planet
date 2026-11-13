import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await p.goto('http://127.0.0.1:4173/pocket-pet-planet/?time=12:00&weather=clear');
await p.waitForFunction(() => window.__ppp?.ready);
await p.screenshot({ path: 'shots/m-top.png', clip: { x: 0, y: 0, width: 390, height: 120 } });
await p.tap('#dexBtn'); await p.waitForTimeout(500);
await p.screenshot({ path: 'shots/m-dex.png' });
await b.close();
