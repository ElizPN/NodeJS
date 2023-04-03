import fs from "fs";

fs.promises
  .readFile("num4.txt", "utf8")
  .then((data) => {
    let dataWithoutComa = data.replace(/,/g, "");
    for (let i = 0; i < dataWithoutComa.length; i++) {
      fs.promises
        .writeFile(`num${i}.txt`, dataWithoutComa[i])
        
    }
  })
  .catch((err) => {
    console.log("error reading num4.txt");
  });
