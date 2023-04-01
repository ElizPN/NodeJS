import fs from "fs";

// read three files

fs.readFile("num1.txt", "utf8", (err, data1) => {
  if (!err) {
    fs.readFile("num2.txt", "utf8", (err, data2) => {
      if (!err) {
        fs.readFile("num3.txt", "utf8", (err, data3) => {
          if (!err) {
            data1 = parseInt(data1);
            data2 = parseInt(data2);
            data3 = parseInt(data3);
            let sum = data1 + data2 + data3;
            sum = sum.toString();
            fs.writeFile("sum_numbers.txt", sum, (err) => {
              if (err) {
                console.log("error writing file sum_numbers.txt");
              }
            });
          } else {
            console.log("error reading file num3.txt");
          }
        });
      } else {
        console.log("error reading file num2.txt");
      }
    });
  } else {
    console.log("error reading file num1.txt");
  }
});
