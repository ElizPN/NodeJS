import fs from "fs";

fs.readFile("num0.txt", "utf-8", (err, data) => {
  let num = parseInt(data);
  let square = num * num;
  console.log(err);

  console.log(square);
});
