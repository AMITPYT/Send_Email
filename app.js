var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "smtp@gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user: 'amitkumar171117@gmail.com',
        pass: 'ccosodzuacsqdymd'
    }
});

var mailoption = {
    form: 'amitkumar171117@gmail.com',
    to:  ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'],
    subject: 'Hello jiiiiiiiii',
    text: 'hahaha'
};
transporter.sendMail(mailoption, function(error, Info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent to: ' + Info.response);
    }
});