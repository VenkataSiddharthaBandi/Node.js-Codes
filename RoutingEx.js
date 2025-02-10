
const express = require("express");
const products = require("./routes/Products");
const orders = require("./routes/Orders");
const reviews = require("./routes/Reviews");
const users = require("./routes/Users");

const app = express();

app.use("/products",products);
app.use("/orders",orders);
app.use("/reviews",reviews);
app.use("/users",users);

app.listen(5000,() => {
    console.log("Server started successfully");
});
