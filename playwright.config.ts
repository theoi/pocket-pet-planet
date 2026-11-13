import { defineConfig } from '@playwright/test';

const chromeArgs = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: process.env.PPP_URL ?? 'http://127.0.0.1:4173/pocket-pet-planet/',
    launchOptions: {
      args: chromeArgs,
      ...(process.env.PPP_CHROME !== 'bundled' ? { executablePath: process.env.CHROME_PATH ?? '/usr/bin/google-chrome' } : {}),
    },
  },
  projects: [
    { name: 'desktop', testMatch: /(desktop|r[0-9]-[a-z]+)\.spec\.ts/, use: { viewport: { width: 1280, height: 800 } } },
    { name: 'mobile', testMatch: /mobile(-[a-z]+)?\.spec\.ts/, use: { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 } },
  ],
});
