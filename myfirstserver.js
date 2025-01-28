var http = require('http');
var curdate = require('./datemodule');

http.createServer(function (req, res) {
  res.statusCode=200;
  date=curdate.Datenow();
  res.end('today date is:'+date);
}).listen(3000);