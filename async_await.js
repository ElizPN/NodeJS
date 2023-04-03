import fs from "fs";


async function func () {
    let data = await fs.promises.readFile("readmeOne.txt", "utf8")
    console.log(data);
}

func()