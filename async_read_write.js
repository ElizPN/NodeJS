import fs from "fs"

fs.readFile("num3.txt", "utf8", (err, data) => {
    if (!err) {
        data *= data 
        data = data.toString()
        console.log(data);
        fs.writeFile("num3.txt", data, (err) => {
            if (err) {
                console.log("writing error num3.txt");
            }
        });
    } else {
        console.log("reading error num3.txt");
    }
})