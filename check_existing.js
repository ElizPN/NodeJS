import fs from "fs/promises";
import { constants } from "fs";
import { text } from "stream/consumers";

try {
  await fs.access("1.txt", constants.F_OK);
  console.log("file exists");
} catch (error) {
  console.error("file does not exist");
}
