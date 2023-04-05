import http from "http";

http.createServer((request, response) => {
  response.write("some_text1");
  response.write("some_text2");
  response.end();
}).listen(3000)
