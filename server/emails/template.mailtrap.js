"use strict";
const fs = require('fs');
const MailService = require('./MailService');
const mailService = new MailService();

const rawdata = fs.readFileSync('email.content.json');
const info = JSON.parse(rawdata);
// console.log(info);

const mailInfo = {
    from: "backend@coronacast.dev",
    to: info.email,
    subject: info.subject,
    template: "welcome",
    context: {
      firstName: info.firstName,
      content: info.content
    }
  };
  
mailService.verify();

mailService.sendMail(mailInfo);