const nodemailer = require("nodemailer");
const Handlebars = require('handlebars')
const hbs = require("nodemailer-express-handlebars");

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

Handlebars.registerHelper('stats', function (data) {
  const newCases = (data[data.length - 1].cases) - (data[0].cases);
  const newDeaths = (data[data.length - 1].deaths) - (data[0].deaths);
  var output = "In " + data[0].county + " County, " + data[0].state + ", there have been "
    + newCases + " new cases and " + newDeaths + " new deaths associated with COVID-19 from "
  return output;
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
      },
      pool: true,         // use pooled connection
      rateLimit: true,    // enable to make sure we are limiting
      maxConnections: 1,  // set limit to 1 connection only
      maxMessages: 3      // send 3 emails per second
    });

    this._transporter.use("compile", hbs(options));
  }
  sendMail({ to, subject, template, context, attachments }) {
    return this._transporter.sendMail({
      to,
      from: "backend@coronacast.dev",
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

module.exports = MailService;
