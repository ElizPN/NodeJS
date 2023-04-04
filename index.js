import fs from "fs/promises";


async function readTextFile () {
    try {
        let data = await fs.readFile("./dir1/dir2/readme.txt", "utf8");
        console.log(data);
        
    } catch (error) {
        console.log("error reading");
        
    }
    
}


readTextFile();