import fs from "fs";


fs.readFile("num9999.txt", "utf-8", (err, data) => {
  let num = parseInt(data);
  let square = num * num;

  if (!err) {
    console.log(square);
  } else {
    console.log("ohh it`s error", err); // if file does not exist we get this message
  }
});

console.log("!!!");
