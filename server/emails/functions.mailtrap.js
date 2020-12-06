const MailService = require('./mailtrap.service');
const mailService = new MailService();
const { MongoClient } = require("mongodb");
const uri = require("../config/config").db.uri;

exports.sendTestWelcomeEmail = (email, firstName) => {

  let mailInfo = {
    from: "backend@coronacast.dev",
    to: email,
    subject: "Welcome to CoronaCast!",
    template: "welcome",
    context: {
      firstName: firstName,
      content: "We look forward to keeping you updated!"
    }
  };

  mailService.verify();

  mailService.sendMail(mailInfo);
}

exports.sendTestReportEmail = async (email, county, state, startDate, endDate, frequency) => {

  const info = []
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);
  console.log(sDate);
  console.log(eDate);

  const client = new MongoClient(uri);

  try {

    await client.connect();

    const database = client.db("CoronaCastdb");
    const collection = database.collection("covidmodels");

    const query = {
      date: {
        $gte: sDate,
        $lte: eDate
      },
      county: {
        $eq: county
      },
      state: {
        $eq: state
      }
    };

    const options = {
      sort: { date: 1 }
    };

    const cursor = collection.find(query, options);

    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    await cursor.forEach(doc => info.push(doc));

  } finally {

    await client.close();

    let mailInfo = {
      from: "backend@coronacast.dev",
      to: email,
      subject: "Your CoronaCast Report is here!",
      template: "report",
      context: {
        startDate: sDate,
        endDate: eDate,
        frequency: frequency,
        content: info
      }
    };

    mailService.verify();

    mailService.sendMail(mailInfo);
  }
};

exports.sendTestConfirmEmail = (email, firstName) => {

  let mailInfo = {
    from: "backend@coronacast.dev",
    to: email,
    subject: "Your CoronaCast Settings have changed.",
    template: "confirm",
    context: {
      firstName: firstName
    }
  };

  mailService.verify();

  mailService.sendMail(mailInfo);
};
