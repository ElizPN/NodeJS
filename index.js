import http from "http";

http.createServer((request, response) => {
  response.statusCode = 200
  response.write("Everything is ok");
  response.write("some_text2");
  response.end();
}).listen(3000)
