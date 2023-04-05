import fs from "fs/promises";
import { constants } from "fs";
import { text } from "stream/consumers";

fs.access("1.txt", constants.F_OK)
  .then(() => {
    console.log("file exists");
  })
  .catch(() => {
    console.error("file does not exist");
  });
