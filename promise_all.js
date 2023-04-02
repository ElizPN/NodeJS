import fs from "fs";

let names = ["1.txt", "2.txt", "3.txt"];

let files = [];

for (let name of names) {
  files.push(fs.promises.readFile(name, "utf8"));
}
console.log(files);

Promise.all(files)
  .then((data) => {
    fs.promises.writeFile("res.txt", data.join(","));
  })
  .catch((err) => {
    console.log("some error");
  });
