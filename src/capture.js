import puppeteer from 'puppeteer';

const capture = async websiteURL => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(websiteURL);
  await page.setViewport({ width: 1920, height: 1080 });
  const file = await page.screenshot({ type: 'png' });
  await browser.close();
  return file;
};

export default capture;
