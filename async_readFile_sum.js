import fs from "fs";

fs.readFile("num1.txt", "utf-8", (err, data2) => {
  if (!err) {
    fs.readFile("num2.txt", "utf-8", (err, data3) => {
      if (!err) {
        data2 = parseInt(data2);
        data3 = parseInt(data3);
        let sum = data2 + data3;

        console.log(sum);
      } else {
        console.log("error reading num2.txt");
      }
    });
  } else {
    console.log("error reading num1.txt");
  }
});
