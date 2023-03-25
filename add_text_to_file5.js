import fs from "fs"

function addText (file, encoding) { 
    let text = fs.readFileSync(file, encoding);
    setInterval(() => {
        text += "!"

      fs.writeFileSync(file, text);
    }, 5000);

}


addText("file5.txt", "utf8"); 



