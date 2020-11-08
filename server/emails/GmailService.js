const nodemailer =  require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const fs = require('fs');

const rawdata = fs.readFileSync('credentials.json');
const login = JSON.parse(rawdata);
// console.log(login);

class GmailService {
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
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: login.email,
          pass: login.password
        }
    });

    this._transporter.use("compile", hbs(options));
  }
  sendMail({to, from, subject, template, context, attachments}) {
    return this._transporter.sendMail({
        to,
        from,
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

module.exports = GmailService;