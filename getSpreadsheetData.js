require("./local.config");
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;
const downloadPath = path.resolve(__dirname, "download");
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

async function getSpreadsheetData() {
  // That's it, the rest is puppeteer usage as normal 😊
  const browser = await puppeteer.launch({
    // headless: false,
    executablePath:
      "./node_modules/puppeteer/.local-chromium/win64-856583/chrome-win/chrome.exe",
  });
  const page = await browser.newPage();
  console.log("--Starting browser--");
  // await page.setViewport({
  //   width: 800,
  //   height: 600,
  // });
  let navigationPromise = page.waitForNavigation();

  await page.goto("https://accounts.google.com/");
  await navigationPromise;
  await page.waitForSelector('input[type="email"]');
  await page.type('input[type="email"]', process.env.email);
  await page.click("#identifierNext");

  await page.waitForSelector('input[type="password"]', { visible: true });
  await page.type('input[type="password"]', process.env.password);

  await page.waitForSelector("#passwordNext", { visible: true });
  await page.click("#passwordNext");
  navigationPromise = page.waitForNavigation();
  await navigationPromise;
  console.log("--Success login.--");

  await page.goto(process.env.spreadsheetUrl);
  console.log("--Success spreadsheet open--");

  if (!fs.existsSync(downloadPath)) {
    console.log("--Creating download dir--");
    await fsPromises.mkdir(downloadPath);
  }

  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: downloadPath,
  });

  await page.keyboard.down("Alt");
  await page.keyboard.press("KeyF");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.keyboard.press("KeyD");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.keyboard.press("KeyW");
  await new Promise((resolve) => setTimeout(resolve, 6000));

  const downloadFile = await fsPromises.readdir(downloadPath);
  console.log("--Saved as zip--", downloadFile);
  await browser.close();
  return undefined;
}

module.exports = getSpreadsheetData;
