import fs from "fs/promises";
import { constants } from "fs";


try {
  await fs.access("1.txt", constants.F_OK);
  console.log("file exists");
} catch (error) {
  console.error("file does not exist");
}
