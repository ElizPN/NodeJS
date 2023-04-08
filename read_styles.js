import http from "http";
import fs from "fs";

http
  .createServer(async (request, response) => {
    let status = 404;
    let text = "page is not found";
    let data;
    let type = "text/css";

    if (request.url === "/styles.css") {
      type = "text/css";
      console.log(process.cwd());
      data = await fs.promises.readFile("styles.css", "utf8");
      status = 200;
      text = "we return css file";
    }

    console.log(`Type: ${type}`);
    console.log(request.url);

    response.writeHead(status, { "Content-Type": type });
    response.write(data || text);
    response.end();
  })
  .listen(3000);
