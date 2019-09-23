const puppeteer = require('puppeteer');

jest.setTimeout(20000);
describe('Buy ticket', () => {
  let browser;
  let metamask;
  let page;

  beforeAll(async (done) => {
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    done();
  });

  it('should display a happy message', async () => {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('#happy-message');
    const msg = await page.$eval('#happy-message', el => el.textContent);
    expect(msg).toMatch('Let the hunger games begin');
  });

  it('should be able to type', async () => {
    await page.waitForSelector('#email-box');
    // await page.click('#');
    await page.type('#email-box', 'carlos@guesser.io');
  });
});
