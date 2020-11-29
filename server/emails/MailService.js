const nodemailer =  require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const Handlebars = require('handlebars')

Handlebars.registerHelper('format_date', function (date) {
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
  return new_date;
});

class MailService {
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
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9c9fdf870787f6",
          pass: "583895d2c35a5b"
        }
    });

    this._transporter.use("compile", hbs(options));
  }
  sendMail({to, subject, template, context, attachments}) {
    return this._transporter.sendMail({
        to,
        from: "backend@coronacast.dev",
        subject,
        template,
        context,
        attachments
    }, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
  }
  verify() {
      return this._transporter.verify(function(error, success) {
        if (error) {
             console.log(error);
        } else {
             console.log('Server is ready to take our messages');
        }
     });
  }
}

module.exports = MailService;
