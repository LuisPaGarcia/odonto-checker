import * as fs from "fs";
import * as path from "path";
const fsPromises = fs.promises;

function getFolderFileNames(): Promise<string[]> {
  const testFolder = "../output/";
  console.log("--Getting agenda files--");
  return fsPromises.readdir(path.resolve(__dirname, testFolder));
}

export default getFolderFileNames;
