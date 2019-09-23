const puppeteer = require('puppeteer');

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/');
  });

  it('should display a happy message', async () => {
    const msg = await page.$eval('#happy-message', el => el.textContent);
    await expect(msg).toMatch('Let the hunger games begin');
  });
});
