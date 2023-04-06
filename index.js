import http from "http";

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "Cache-Control": "no-cache",
    });

    const date = new Date();
    const formattedData = date.toLocaleString();
    response.write(`<p>${formattedData}</p>`);
  })
  .listen(3000);
