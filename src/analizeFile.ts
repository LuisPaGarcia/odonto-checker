import * as fs from "fs";
import * as path from "path";
import cheerio from "cheerio";
const fsPromises = fs.promises;

async function analizeFile(filenameHtml: string): Promise<string> {
  const outputFile = path.resolve(__dirname, "../output", filenameHtml);
  const fileContent = await fsPromises.readFile(outputFile);

  const $ = cheerio.load(fileContent);
  return $.html();
}

export default analizeFile;
