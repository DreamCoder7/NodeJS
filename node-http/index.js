const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((res, req) => {
  console.log(req);

  res.statusCode = 200;
  req.setHeader("Content-Type", "text/html");
  req.end(`<html><body><h1>Hello NodeJS</h1></body></html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
