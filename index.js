import http from "http";
let i = 20;

http
  .createServer((request, response) => {
    if (request.url != "/mockServiceWorker.js") {
      console.log(request.url);

      response.writeHead(200, {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache",
      });
      const date = new Date();
      const formattedData = date.toLocaleString();
      response.write(`<p>${formattedData}</p>`);
      response.write(String(--i));
      if (i === 0) {
        response.write("counter is 0");
      }
      response.end();
    }
  })
  .listen(3000);
