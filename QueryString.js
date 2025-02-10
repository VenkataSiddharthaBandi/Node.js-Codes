
const express = require("express");

const app = express();

app.get('/',(request,response) => {
    if(request.query.city){
        response.send(`Hello welcome to ${request.query.city}`);
    }
    else{
        response.send("Hello");
    }
    
});

app.listen(5000,() => {
    console.log("Server started successfully");
});