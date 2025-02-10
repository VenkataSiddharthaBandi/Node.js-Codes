
const express = require("express");

const app = express();

app.get("/:name",(req,res) => {
    res.send("My name is : " + req.params.name);
});

app.get("/address/:city/:state",(req,res) => {
    res.send("My native place and state are : " + req.params.city + ", " + req.params.state);
})

app.listen(4500,() => {
    console.log("Server started successfully");
});