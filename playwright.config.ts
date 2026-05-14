import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:6006',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',

        viewport: {
          width: 1440,
          height: 900,
        },
      },
    },

    {
      name: 'chromium-mobile',
      use: {
        ...devices['Pixel 7'],
      },
    },

    {
      name: 'iphone',
      use: {
        ...devices['iPhone 15'],
      },
    },
  ],
  webServer: {
  command: 'npm run storybook -- --host 127.0.0.1',
  url: 'http://127.0.0.1:6006',
  reuseExistingServer: !process.env.CI,
  timeout: 120_000,
},
});