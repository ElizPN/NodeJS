import fs from "fs";

let number = fs.readFileSync("./file6.txt", "utf8");

number += 1;

fs.writeFileSync("./file6.txt", number);
