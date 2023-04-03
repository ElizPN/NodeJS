import fs from "fs";

const numbers = [
  "asyncFile1.txt",
  "asyncFile2.txt",
  "asyncFile3.txt",
  "asyncFile4.txt",
  "asyncFile5.txt",
];

let files = [];

for (const num of numbers) {
  files.push(fs.promises.readFile(num, "utf8"));
}

Promise.all(files)
  .then((data) => {
    let sum = 0;
    for (const num of data) {
      sum += parseInt(num);
    }

    sum = sum.toString();

    fs.promises.writeFile("res2.txt", sum);
  })
  .catch((err) => {
    console.log("something wrong");
  });
