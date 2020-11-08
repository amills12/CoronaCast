//const fs = require('fs');
const MailService = require('./MailService');
const mailService = new MailService();

//const rawdata = fs.readFileSync('email.content.json');
//const info = JSON.parse(rawdata);
// console.log(info);

exports.sendTestWelcomeEmail = (email, firstName) => {

  const mailInfo = {
    from: "backend@coronacast.dev",
    to: email,
    subject: "Welcome to CoronaCast!",
    template: "welcome",
    context: {
      firstName: firstName,
      content: "Lorem ipsum or whatever."
    }
  };

  mailService.verify();

  mailService.sendMail(mailInfo);
}
