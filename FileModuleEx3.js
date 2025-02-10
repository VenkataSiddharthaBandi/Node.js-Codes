

const fs = require("fs");

const sampleText = "Hello Everyone";

fs.writeFile("Sample2.txt",sampleText,(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Text Changed Successfully");
    }
})