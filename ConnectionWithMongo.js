
const express = require("express");
const mongoose = require("mongoose");

const dbURL = require("./Properties").DB_URL;

mongoose.connect(dbURL);

mongoose.connection.on("connected", () =>{
    console.log("Connected to MongoDB using MongooseJS");
});







