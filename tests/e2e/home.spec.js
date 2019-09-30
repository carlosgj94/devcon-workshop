const puppeteer = require('puppeteer');
const dappeteer = require('dappeteer');

jest.setTimeout(20000);
describe('Buy ticket', () => {
  let browser;
  let metamask;
  let page;
  let navigationPromise;

  beforeAll(async (done) => {
    browser = await dappeteer.launch(puppeteer);
    metamask = await dappeteer.getMetamask(browser, {
      seed: process.env.SEED,
    });
    await metamask.switchNetwork('rinkeby');
    page = await browser.newPage();
    navigationPromise = page.waitForNavigation();
    done();
  });

  it('should display a happy message', async () => {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await navigationPromise;

    await metamask.approve();
    await page.bringToFront();

    await page.waitForSelector('#happy-message');
    const msg = await page.$eval('#happy-message', el => el.textContent);
    expect(msg).toMatch('Let the hunger games begin');
  });

  it('should be able to type', async () => {
    await page.waitForSelector('#email-box');
    await page.type('#email-box', 'carlos@guesser.io');
    await page.waitForSelector('#pay-button.bubbly-button');
    await page.click('#pay-button.bubbly-button');

    await page.waitFor(1000);
    await metamask.confirmTransaction();
    await page.bringToFront();

    await page.waitForSelector('.success-message');
    const msg = await page.$eval('.success-message', el => el.textContent);
    expect(msg).toMatch('Ticket bought successfully!');
  });

  afterAll(async () => {
    await browser.close();
  });
});
