var http = require('http');
var curdate = require('./datemodule');
var fs=require ('fs');

http.createServer(function (req, res) {
  res.statusCode=200;
  fs.readFile('demofile.html',function(err,data){
    res.write(data);
    res.end();
  })
}).listen(3000);