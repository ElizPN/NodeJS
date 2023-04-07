import http, { request } from "http";
import fs from "fs";

let obj = {
  "/page1": "file1.html",
  "/page2": "file2.html",
  "/page3": "file3.html",
};

http
  .createServer(async (request, response) => {
    let text = "unfortunately we can not find page";
    let status = 404;

    for (const key in obj) {
      if (request.url === key) {
        text = await fs.promises.readFile(obj[key], "utf8");
        status = 200;
      }
    }

    response.writeHead(status, { "Content-Type": "text/html" });
    response.write(text);
    response.end();
  })
  .listen(3000);
