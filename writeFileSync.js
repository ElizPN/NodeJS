// fs.writeFileSync("readme.txt", "text");

import fs from "fs";

let myObj = {
  "file1.txt": "text1",
  "file2.txt": "text2",
  "file3.txt": "text3",
};

function createFiles(obj) {
  for (const key in obj) {
   fs.writeFileSync(key, obj[key])
  }
}
let res = createFiles(myObj);
console.log(res);
