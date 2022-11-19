var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "smtp@gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user: 'amitkumar171117@gmail.com',
        pass: 'xbhmjnlohdyowjpp'
    }
});

var mailoption = {
    form: 'amitkumar171117@gmail.com',
    to:  'tejim47660@jernang.com',
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