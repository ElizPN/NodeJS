import fs from "fs";

async function func() {
    
  // try to read two files
  try {
    let data1 = await fs.promises.readFile("1.txt", "utf8");
    let data2 = await fs.promises.readFile("2.txt", "utf8");

    // count numbers sum of these files
    data1 = parseInt(data1);
    data2 = parseInt(data2);
    let sum = data1 + data2;
    sum = sum.toString();

    // write sum to sepearate file
    await fs.promises.writeFile("sum.txt", sum);
  } catch (err) {
    console.log("reading error");
  }
}

func();
