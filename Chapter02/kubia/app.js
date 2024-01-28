const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Welcome to CLO 835 Week3 Lab end. This is the host " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

