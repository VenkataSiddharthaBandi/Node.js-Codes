
const express = require("express");

const route = express.Router();

route.get("/",(req,res) => {
    res.send("This is from Orders");
});

module.exports = route;