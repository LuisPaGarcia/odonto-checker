const getSpreadsheetData = require("./getSpreadsheetData");
const unzip = require("./unzip");
const getFolderFileNames = require("./getFolderFileNames");
const getFilesToAnalize = require("./getFilesToAnalize");
const analyzeFile = require("./analizeFile");

(async function () {
  await getSpreadsheetData();
  await unzip();
  const files = await getFolderFileNames();
  const filenamesToAnalizeArr = await getFilesToAnalize(files);
  for (const filename of filenamesToAnalizeArr) {
    console.log(filename);
    // const html = await analyzeFile(filename);
    // console.log("------------------", filename);
    // console.log(html);
    // console.log("------------------", filename);
  }
})();
