import fs from "fs";

async function func() {
  try {
    let sum = 0;
    const fileNames = ["num5.txt", "num6.txt", "num7.txt"];
    for (const fileName of fileNames) {
      let num = Math.floor(Math.random() * 100);
      num = num.toString();
      await fs.promises.writeFile(fileName, num);

      let data = await fs.promises.readFile(fileName, "utf8");
      data = parseInt(data);
      sum += data;
    }
    sum = sum.toString();
    await fs.promises.writeFile("sum2.txt", sum);
  } catch (error) {
    console.log("reading error");
  }
}

func();
