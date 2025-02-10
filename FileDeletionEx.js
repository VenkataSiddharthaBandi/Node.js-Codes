

const fs = require("fs");

fs.unlink("Sample2.txt",(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted successfully");
    }
})