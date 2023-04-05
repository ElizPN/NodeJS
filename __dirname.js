// import { dirname } from "path";
// import { fileURLToPath } from "url";


// const __dirname = dirname(fileURLToPath(import.meta.url));


 import * as url from "url";
 const __filename = url.fileURLToPath(import.meta.url);
 const __dirname = url.fileURLToPath(new URL(".", import.meta.url));


 export default __dirname;