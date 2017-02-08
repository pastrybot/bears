//Require the dependencies

var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end("Hello World! I am Sharknado!");


}).listen(3000);

console.log('Server started on port 3000')
