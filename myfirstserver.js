var http = require('http');

http.createServer(function (req, res) {
  res.statusCode=200;
  res.end('Hello World!');
}).listen(3000);