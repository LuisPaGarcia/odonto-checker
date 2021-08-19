import * as fs from "fs";
import * as path from "path";
const unzipper = require("unzipper");
const fsPromises = fs.promises;

async function unzip(): Promise<unknown> {
  const outputPath = path.resolve(__dirname, "../output");
  const downloadPath = path.resolve(
    __dirname,
    "../download",
    "AGENDA AGOSTO 2021.zip"
  );
  console.log("--Unzipping agenda--");

  if (!fs.existsSync(outputPath)) {
    console.log("--Creating output dir--");
    await fsPromises.mkdir(outputPath);
  }

  console.log("--Extracting zip--");
  return fs
    .createReadStream(downloadPath)
    .pipe(unzipper.Extract({ path: outputPath }));
}

export default unzip;
