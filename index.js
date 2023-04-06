import http from "http";

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Cache-Control", "no-cache");
    response.statusCode = 200;
    const date = new Date();
    const formattedData = date.toLocaleString();
    response.write(`<p>${formattedData}</p>`);
  })
  .listen(3000);
