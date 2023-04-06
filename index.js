import http from "http";

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Cache-Control", "no-cache");
    response.statusCode = 200;
    response.write("<b>hello world</b>");

    response.end();
  })
  .listen(3000);
