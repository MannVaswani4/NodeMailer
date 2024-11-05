const nodemailer = require("nodemailer");
const { setMaxListeners } = require("nodemailer/lib/xoauth2");
require('dotenv').config();
const pass= process.env.PASSWORD
const email= process.env.MAIL
const recieverMail= process.env.RECEIVER_MAIL
let config = {
    service : 'gmail',
    auth : {
        user: email,
        pass: pass
    }
}

let transporter = nodemailer.createTransport(config);

let message = {
    from : email,
    to : recieverMail,
    subject: "Place Order",
    html: "<h2>Mail from me</h2>"
}


const Mailer= async(req,res)=>{
    try{
        await transporter.sendMail(message)
        console.log("you should receive an email")
        res.status(200).send("Email sent")
        }
    catch{(error => {
        console.log(error)
        res.status(500).send("Email failed")
        }) 
    }
}
module.exports= { Mailer }