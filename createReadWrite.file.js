import fs from "fs";

let readableStream = fs.createReadStream("big_file.txt", "utf8");
let writeableStream = fs.createWriteStream("write_me.txt");

readableStream.on("data", function (chunk) {
  writeableStream.write(chunk);
});
