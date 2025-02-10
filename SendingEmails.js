
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service : "gmail",
    secure : false,
    auth: {
        user : "bandivenkatasiddhartha@gmail.com",
        pass : "Siddhartha@144"
    }
});

const options = {
    from : "bandivenkatasiddhartha@gmail.com",
    to : "venkatasiddharthabandi@gmail.com",
    subject : "Sending email using Node.js",
    text : "Hello Everyone"
}

transporter.sendMail(options,(error,data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Email sent successfully");
    }
})