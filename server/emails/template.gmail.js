"use strict";
const fs = require('fs');
const GmailService = require('./GmailService');
const gmail = new GmailService();
  
const rawdata = fs.readFileSync('email.content.json');
const info = JSON.parse(rawdata);
// console.log(info);

const mailInfo = {
    from: "coronacast.dev@gmail.com",
    to: info.email,
    subject: info.subject,
    template: "welcome",
    context: {
      firstName: info.firstName,
      content: info.content
    }
  };
  
gmail.verify();

gmail.sendMail(mailInfo);