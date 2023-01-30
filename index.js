var http = require('http');
console.log("Starting...");
http.createServer(function (req, res) {
  console.log("got the request");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World from Gagan');
}).listen(8080);