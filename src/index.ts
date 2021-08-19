import getSpreadsheetData from "./getSpreadsheetData";
import unzip from "./unzip";
import getFolderFileNames from "./getFolderFileNames";
import getFilesToAnalize from "./getFilesToAnalize";
// import analyzeFile from "./analizeFile";

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
