import fs from "fs";

fs.readFile("num3.txt", "utf-8", (err, data) => {
  let num = parseInt(data);
  let square = num * num;
  console.log(err);// will be throw Error if readeble file does not exist.

  console.log(square);
});
