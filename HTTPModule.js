
const http = require("Http");

http.createServer((request,response) => {
    response.writeHead(200,{"Content-Type" : "text/plain"})
    response.end("Heloo Welcome to my server");
}).listen(3500);