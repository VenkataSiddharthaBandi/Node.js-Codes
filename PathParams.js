
const express = require("express");

const app = express();

app.get('/xyz/:city',(request,response) => {
    if(request.params.city){
        response.send(`Hello welcome to ${request.params.city}`)
    }
});

app.listen(5000,() => {
    console.log("Server started successfully");
});