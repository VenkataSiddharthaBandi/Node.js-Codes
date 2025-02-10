

const http = require("http");

http.createServer((request,response) => {
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.end("Hello Welcome to my NOde.js server");
}).listen(3800);