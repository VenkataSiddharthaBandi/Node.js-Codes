const express = require('express');

const app = express();

app.get("/",(req,res) =>{
    res.send("This is from GET method");
});

app.post("/",(req,res) =>{
    res.send("This is from POST method");
});

app.put("/",(req,res) =>{
    res.send("This is from PUT method");
});

app.delete("/",(req,res) =>{
    res.send("This is from DELETE method");
});

app.listen(5501,() =>{
    console.log("Server started successfully");
});

