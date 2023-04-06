import http from "http";

http
  .createServer((request, response) => {
    if (request.url !== "/mockServiceWorker.js") {
      let text = "";
      let status;

      if (request.url === "/page1") {
        text = "one";
        status = 200;
      } else if (request.url === "/page2") {
        text = "two";
        status = 200;
      } else if (request.url === "/page3") {
        text = "three";
        status = 200;
      } else {
        text = "page not fount";
        status = 404;
      }

      response.writeHead(status, {
        "Content-Type": "text/html",
      });
      response.write(text);
      response.end();
    }
  })
  .listen(3000);
