
const express = require("express");

const app = express();

app.listen(5000,() => {
    console.log("Server started successfully");
});

app.get('/',(request,response) => {
    response.send("This is from GET request");
});

app.post('/',(request,response) => {
    response.send("This is from POST request");
});

app.put('/',(request,response) => {
    response.send("This is from PUT request");
});

app.delete('/',(request,response) => {
    response.send("This is from DELETE request");
});

