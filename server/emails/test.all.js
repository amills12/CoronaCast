const { sendTestWelcomeEmail, sendTestReportEmail, sendTestConfirmEmail } = require('./functions.mailtrap')
const { sendWelcomeEmail, sendReportEmail, sendConfirmEmail } = require('./functions.gmail')


const email = "coronacast.dev@gmail.com";
const firstName = "Runtime";
const endDate = "2020-12-07";
const county = "Alachua";
const state = "Florida";
const frequency = "monthly";


//sendTestWelcomeEmail(email, firstName);
//sendTestReportEmail(email, county, state, endDate, frequency);
//sendTestConfirmEmail(email, firstName);

//sendWelcomeEmail(email, firstName);
sendReportEmail(email, county, state, endDate, frequency);
//sendConfirmEmail(email, firstName);

