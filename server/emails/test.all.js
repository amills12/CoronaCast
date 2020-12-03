const { sendTestWelcomeEmail, sendTestReportEmail, sendTestConfirmEmail } = require('./functions.mailtrap')
const { sendWelcomeEmail, sendReportEmail, sendConfirmEmail } = require('./functions.gmail')


const email = "coronacast.dev@gmail.com";
const firstName = "Runtime";
const startDate = "10/01/2020";
const endDate = "10/31/2020";
const county = "Alachua";
const state = "Florida";
const frequency = "monthly";

sendTestWelcomeEmail(email, firstName);
sendTestReportEmail(email, county, state, startDate, endDate, frequency);
sendTestConfirmEmail(email, firstName);

/*
sendWelcomeEmail(email, firstName);
sendReportEmail(email, county, state, startDate, endDate);
sendConfirmEmail(email, firstName);
*/


