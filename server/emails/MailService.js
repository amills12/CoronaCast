const nodemailer =  require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

class MailService {
  constructor(host, port, user, password) {
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