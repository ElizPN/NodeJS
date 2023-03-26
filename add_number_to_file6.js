import fs from "fs";

let number = fs.readFileSync("./file6.txt", "utf8");

console.log(typeof number);

number = parseInt(number);
number += 1;
number = number.toString();

fs.writeFileSync("./file6.txt", number);
