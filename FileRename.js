

const fs = require("fs");

fs.rename("Sample2.js","Example.js",(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File renamed successfully");
    }
})