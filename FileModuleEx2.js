

const fs = require("fs");

fs.writeFile("Sample2.txt","Hello",(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
    }
})