import fs from "fs";

async function func() {
  try {
    let data = await fs.promises.readFile("readmeOne.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("some error");
  }
}

func();
