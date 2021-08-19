const fs = require("fs");
const fsPromises = fs.promises;
const cheerio = require("cheerio");
const path = require("path");

async function analizeFile(filenameHtml) {
  const outputFile = path.resolve(__dirname, "output", filenameHtml);
  const fileContent = await fsPromises.readFile(outputFile);

  const $ = cheerio.load(fileContent);
  return $.html();
}

module.exports = analizeFile;
