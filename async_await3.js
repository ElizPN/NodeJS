import fs from "fs";

async function func() {
  try {
    const fileNames = ["num5.txt", "num6.txt", "num7.txt"];
    for (const fileName of fileNames) {
      let num = Math.random() * 10;
      num = num.toString();

      await fs.promises.writeFile(fileName, num);
    }
  } catch (error) {
    console.log("reading error");
  }
}

func();
