import fs from "fs";

let readableStream = fs.createReadStream("big_file.txt", "utf8")
let writeableStream = fs.createWriteStream("copy_big_file.txt")


readableStream.pipe(writeableStream);