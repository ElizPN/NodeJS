import fs from "fs";

async function func() {
  try {
    let names = ["1.txt", "2.txt", "3.txt"];
    let data = [];

    for (const name of names) {
      data.push(await fs.promises.readFile(name, "utf8"));
    }

    await fs.promises.writeFile("res3.txt", data.join(","));
  } catch (err) {
    console.log("some error");
  }
}

func();
