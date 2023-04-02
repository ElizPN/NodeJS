import fs from "fs";

fs.promises.readFile("num4.txt", "utf8").then((data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += parseInt(data[i]);  
    }
    
  console.log(sum);
});
