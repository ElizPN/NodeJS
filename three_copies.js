import fs from "fs";

const readableStream = fs.createReadStream("big_file.txt", "utf8");
const writeableStream1 = fs.createWriteStream("copy1.txt");
const writeableStream2 = fs.createWriteStream("copy2.txt");
const writeableStream3 = fs.createWriteStream("copy3.txt");

readableStream.on("data", function (chunk) {
  writeableStream1.write(chunk);
  writeableStream2.write(chunk);
  writeableStream3.write(chunk);
});

readableStream.on("end", function () {
  writeableStream1.end();
  writeableStream2.end();
  writeableStream3.end();
  console.log("All copies created successfully!");
});

readableStream.on("error", function (err) {
  console.error(err);
});
