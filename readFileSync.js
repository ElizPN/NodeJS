import fs from "fs";


let getTextOne = fs.readFileSync("readmeOne.txt", "utf8");
let getTextTwo = fs.readFileSync("readmeTwo.txt", "utf8");


console.log(getTextOne, getTextTwo);