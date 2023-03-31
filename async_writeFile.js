import fs from "fs";

for (let i = 0; i <= 10; i++) {
  let str = i.toString()
  console.log(str);

  fs.writeFile(`asyncFile${i}.txt`, str, (err) => {
    if (err) {
      console.log("something goes wrong");
    }
  });
}
