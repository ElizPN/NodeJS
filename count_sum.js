import fs from "fs";

let num1 = fs.readFileSync("./num1.txt", "utf8");
num1 = parseInt(num1);

let num2 = fs.readFileSync("num2.txt", "utf8");
num2 = parseInt(num2);

let num3 = fs.readFileSync("num3.txt", "utf8");
num3 = parseInt(num3);

let sum = num1 + num2 + num3;
sum = sum.toString();

fs.writeFileSync("sum_result.txt", sum);
