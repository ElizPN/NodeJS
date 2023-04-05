import fs from "fs";

let readableStream = fs.createReadStream("big_file.txt", "utf8")

readableStream.on("data", function(chunk){
    console.log(chunk);
})
