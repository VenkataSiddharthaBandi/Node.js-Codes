

const fs = require("fs");

fs.readFile("Sample.txt","UTF8",(err,data) =>{

    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})