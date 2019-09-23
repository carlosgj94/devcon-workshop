const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');
  const msg = await page.$eval('#happy-message', el => el.textContent);
  console.log(msg);

  await browser.close();
})();
