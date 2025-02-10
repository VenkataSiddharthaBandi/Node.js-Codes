

const http = require("http");

const myServer = http.createServer((request,response) => {
    response.write("Welcome to my server");
    response.end();
})

myServer.listen(5100);

