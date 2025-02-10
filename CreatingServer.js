

const http = require("http")

const myServer = http.createServer((request,response) => {
    response.write("Welcome to my Node.js Server");
    response.end();
})

myServer.listen(5200);