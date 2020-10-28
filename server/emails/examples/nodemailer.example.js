"use strict";
const nodemailer = require('nodemailer');
const fs = require('fs');

// We're using this fake smtp host to verify emails are working.
// Login to https://mailtrap.io/inboxes with our Google account to test.
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9c9fdf870787f6",
      pass: "583895d2c35a5b"
    }
});

var htmlstream = fs.createReadStream("example.html");

const message = {
    from: 'backend@coronacast.dev',                     // Sender address
    to: 'to@email.com',                                 // List of recipients
    subject: 'Test Email',                              // Subject line
    text: 'You\'re reading this in plain text.',        // Plain text body
    html: htmlstream ,                                  // HTML body
    /*                                                  // This is where attachments go
    attachments: [
        { 
          filename: '',                                 
          path: ''
      }
    ]*/
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});