const MailService = require('./MailService');
const mailService = new MailService();

exports.sendTestWelcomeEmail = (email, firstName) => {

  let mailInfo = {
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

exports.sendTestReportEmail = (email, startDate, endDate, data) => {

  let mailInfo = {
    from: "backend@coronacast.dev",
    to: email,
    subject: "Your CoronaCast Report is here!",
    template: "report",
    context: {
      startDate: startDate,
      endDate: endDate,
      content: data
    }
  };

  mailService.verify();

  mailService.sendMail(mailInfo);
};
