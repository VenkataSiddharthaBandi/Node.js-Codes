
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "BVS@144",
    database : "TESTNODE"
});

const getMobiles = () => {
    connection.query(`SELECT * FROM MOBILES`,(err,data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}
