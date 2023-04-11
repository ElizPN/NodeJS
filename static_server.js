import http from "http";
import fs from "fs";

http
  .createServer(async (request, response) => {
    let path = "root" + request.url;
    let text = "";
    let status;
    console.log(request.url);

    try {
      if ((await fs.promises.stat(path)).isDirectory()) {
        path += "/index.html";
      }

      text = await fs.promises.readFile(path, "utf8");
      status = 200;
    } catch (err) {
      status = 404;
      text = await fs.promises.readFile("root/404.html", "utf8");
    }

    response.writeHead(status, { "Content-Type": "text/html" });
    response.write(text);
    response.end();
  })
  .listen(3000);
