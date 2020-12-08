const nodemailer = require("nodemailer");
const Handlebars = require('handlebars')
const hbs = require("nodemailer-express-handlebars");
const { linearFitCases } = require('../statisticalAnalysis/linearFit')
const { linearFitDeaths } = require('../statisticalAnalysis/linearFitDeaths')
const gmail = require("../config/config").gmail

function formatDate(date) {
  date.setHours(24);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  new_date = month + '/' + dt + '/' + year;
  date.setHours(-4);
  return new_date;
}

Handlebars.registerHelper('format_date', function (data) {
  return formatDate(data);
});

Handlebars.registerHelper('linear_fit', function (data) {
  return Math.ceil(linearFitCases(data));
});

Handlebars.registerHelper('linear_fit_deaths', function (data) {
  return Math.ceil(linearFitDeaths(data));
});

Handlebars.registerHelper('stats', function (data) {
  let output = "In " + data[0].county + " County, " + data[0].state + ", there have been ";
  return output;
});

Handlebars.registerHelper('new_cases', function (data) {
  return (data[data.length - 1].cases) - (data[0].cases);
});

Handlebars.registerHelper('new_deaths', function (data) {
  return (data[data.length - 1].deaths) - (data[0].deaths);
});

class GmailService {
  constructor() {
    const options = {
      viewEngine: {
        partialsDir: __dirname + "/views/partials",
        layoutsDir: __dirname + "/views/layouts",
        extname: ".hbs"
      },
      extName: ".hbs",
      viewPath: "views"
    };

    this._transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: gmail.user,
        pass: gmail.pass
      }
    });

    this._transporter.use("compile", hbs(options));
  }
  sendMail({ to, from, subject, template, context, attachments }) {
    return this._transporter.sendMail({
      to,
      from,
      subject,
      template,
      context,
      attachments
    }, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  }
  verify() {
    return this._transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
  }
}

module.exports = GmailService;
