const GmailService = require('./gmail.service');
const gmail = new GmailService();
const { MongoClient } = require("mongodb");
const uri = require("../config/config").db.uri

exports.sendWelcomeEmail = (email, firstName) => {

  const mailInfo = {
    from: "coronacast.dev@gmail.com",
    to: email,
    subject: "A Welcome Email Appears...",
    template: "welcome",
    context: {
      firstName: firstName,
      content: "We look forward to keeping you updated!"
    }
  };

  gmail.verify();

  gmail.sendMail(mailInfo);
};

exports.sendReportEmail = async (email, county, state, startDate, endDate, frequency) => {

  const info = []
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);
  sDate.setHours(-4);
  eDate.setHours(-4);

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
      from: "coronacast.dev@gmail.com",
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

    gmail.verify();

    gmail.sendMail(mailInfo);
  }
};

exports.sendConfirmEmail = (email, firstName) => {

  let mailInfo = {
    from: "coronacast.dev@gmail.com",
    to: email,
    subject: "Your CoronaCast Settings have changed.",
    template: "confirm",
    context: {
      firstName: firstName
    }
  };

  gmail.verify();

  gmail.sendMail(mailInfo);
};
