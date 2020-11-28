"use strict";
const fs = require('fs');
const GmailService = require('./GmailService');
const gmail = new GmailService();

const info =
  [
    {
      "_id": "5fa58274efc85439a4b57104",
      "date": "2020-10-30",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10533,
      "deaths": 75,
      "__v": 0
    },
    {
      "_id": "5fa58275efc85439a4b57db0",
      "date": "2020-10-31",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10582,
      "deaths": 76,
      "__v": 0
    },
    {
      "_id": "5fa58276efc85439a4b58a5d",
      "date": "2020-11-01",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10706,
      "deaths": 78,
      "__v": 0
    },
    {
      "_id": "5fa58277efc85439a4b5970a",
      "date": "2020-11-02",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10760,
      "deaths": 78,
      "__v": 0
    },
    {
      "_id": "5fa58277efc85439a4b5a3b5",
      "date": "2020-11-03",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10842,
      "deaths": 78,
      "__v": 0
    },
    {
      "_id": "5fa58278efc85439a4b5b060",
      "date": "2020-11-04",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10913,
      "deaths": 78,
      "__v": 0
    },
    {
      "_id": "5fa58279efc85439a4b5bd0d",
      "date": "2020-11-05",
      "county": "Alachua",
      "state": "Florida",
      "fips": 12001,
      "cases": 10996,
      "deaths": 78,
      "__v": 0
    }
  ]

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
}

exports.sendReportEmail = (email, startDate, endDate) => {

  let mailInfo = {
    from: "coronacast.dev@gmail.com",
    to: email,
    subject: "Your CoronaCast Report is here!",
    template: "report",
    context: {
      startDate: startDate,
      endDate: endDate,
      content: info
    }
  };

  gmail.verify();

  gmail.sendMail(mailInfo);
}
