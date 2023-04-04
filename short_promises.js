import fs from "fs/promises"


async function func () {
    let data = await fs.readFile("sum.txt", "utf8")
    console.log(data);
}

func();