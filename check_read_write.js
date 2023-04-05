import fs from "fs/promises";
import { constants } from "fs";

try {
  await fs.access("1.txt", constants.R_OK | constants.W_OK);
  console.log("can access");
} catch {
  console.error("cannot access");
}
