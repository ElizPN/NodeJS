import http from "http";

http
  .createServer((request, response) => {
    response.statusCode = 404;
    response.write("Ohh we can not find this page");

    response.end();
  })
  .listen(3000);
