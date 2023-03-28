import  fs from "fs"

try {
    let text = fs.readFileSync("./hello.js", "utf8")
    console.log(text);
    
} catch (err) {
    console.log("en error occured while reading the file" , err);
    
}