/* There are mainly four requests which are used mainly in Node.js

1)GET request
2)POST request
3)PUT request
4)DELETE request

*/

/*
    GET request is used to retrieve the data
    POST request is used for inserting the data
    PUT request is used for updating the data
    DELETE request is used for deleting the date
*/


const express = require("express");

const app = express();

app.get("/",(request,reesponse) => {
    app.send("This is from GET request");
});

app.post("/",(request,response) => {
    app.send("This is from POST request");
});

app.put("/",(request,response) => {
    app.send("This is from PUT request");
});

app.delete("/",(request,response) => {
    app.send("This is from DELETE request");
});

app.listen(3500);