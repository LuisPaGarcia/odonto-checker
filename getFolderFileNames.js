const fs = require("fs");
const fsPromises = fs.promises;

function getFolderFileNames() {
  const testFolder = "./output/";
  console.log("--Getting agenda files--");
  return fsPromises.readdir(testFolder);
}

module.exports = getFolderFileNames;
