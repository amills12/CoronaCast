"use strict";
const nodemailer = require('nodemailer');
const fs = require('fs');

let rawdata = fs.readFileSync('../credentials.json');
let login = JSON.parse(rawdata);
console.log(login);

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: login.email,
      pass: login.password
    }
});

var htmlstream = fs.createReadStream("welcome.html");   // Formatted HTML file goes here

const message = {
    from: 'coronacast.dev@gmail.com',                   // Sender address
    to: 'coronacast.dev@gmail.com',                     // List of recipients
    subject: 'Yet Another Test Email',                  // Subject line
    text: 'You\'re reading this in plain text.',        // Plain text body
    html: htmlstream ,                                  // HTML body
    /*                                                  // Insert attachments here
    attachments: [
        { 
          filename: '',                                 
          path: ''
      }
    ]*/
};

transport.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});