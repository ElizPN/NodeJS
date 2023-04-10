import http, { request } from "http";
import fs from "fs";

http
  .createServer(async (request, response) => {
    let status = 404;
    let data;
    let type = "text/html";
    let text = "page is not fond";

    if (request.url === "/my_page") {
      data = await fs.promises.readFile("my_page.html", "utf8");
      status = 200;
    }

    if (request.url === "/img.png") {
      data = await fs.promises.readFile("img.png");
      type = "image/png";
      status = 200;
    }

    if (request.url === "/styles.css") {
      data = await fs.promises.readFile("styles.css");
      type = "text/css";
      status = 200;
    }

    response.writeHead(status, { "Content-Type": type });
    response.write(data || text);
    response.end();
  })
  .listen(3000);
