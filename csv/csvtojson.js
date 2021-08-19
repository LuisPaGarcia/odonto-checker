const csv = require("csvtojson");
const fs = require("fs").promises;
const path = require("path");
const csvFileName = "AGENDA AGOSTO 2021 - JUEVES 19.csv";

(async function () {
  const json = await csv().fromFile(path.resolve(__dirname, csvFileName));
  await fs.writeFile(
    path.resolve(__dirname, "output.json"),
    JSON.stringify(json)
  );
})();
