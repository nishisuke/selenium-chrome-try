const { Builder } = require('selenium-webdriver');
const fs = require('fs');

(async () => {
  
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions([
      '--headless',
      '--disable-gpu',
    ])
    .build();

  try {
    await driver.get('http://www.google.com/ncr');
    const base64 = await driver.takeScreenshot();
    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync('screenshot.jpg', buffer);
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
})();
