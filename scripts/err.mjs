import { chromium } from '@playwright/test';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader'] });
const p = await b.newPage();
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('http://127.0.0.1:4173/pocket-pet-planet/');
await p.waitForTimeout(3000);
await b.close();
