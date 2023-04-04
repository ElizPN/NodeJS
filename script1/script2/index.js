import fs from "fs/promises";

async function readTextFile() {
  try {
    let data = await fs.readFile("./dir/readme.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("error reading");
  }
}
readTextFile();
///Users/gast/Documents/Repositories/NodeJS/script1/script2/index.js
///Users/gast/Documents/Repositories/NodeJS/dir/readme.txt
