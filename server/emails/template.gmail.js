"use strict";
const fs = require('fs');
const GmailService = require('./GmailService');
const gmail = new GmailService();
  
// const rawdata = fs.readFileSync('email.content.json');
// const info = JSON.parse(rawdata);
// console.log(info);

exports.sendWelcomeEmail = (email, firstName) => {

const mailInfo = {
    from: "coronacast.dev@gmail.com",
    to: email,
    subject: "Another Test Email Appears...",
    template: "welcome",
    context: {
      firstName: firstName,
      content: "Lorem ipsum or whatever."
    }
  };
  
  gmail.verify();

  gmail.sendMail(mailInfo);
}