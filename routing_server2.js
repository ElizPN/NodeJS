import http, { request } from "http";

const obj = {
  "/page1": "1",
  "/page2": "2",
  "/page3": "3",
};


http
  .createServer((request, responce) => {
    let text = "ohhh nooo page not fount";
    let status = 404;

    for (const key in obj) {
      if (request.url === key) {
        text = obj[key];
        status = 200;
      }
    }

    responce.writeHead(status, {
      "Content-Type": "text/html",
    });

    responce.write(text);
    responce.end();
  })
  .listen(3000);
