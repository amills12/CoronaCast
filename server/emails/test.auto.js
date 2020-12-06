const { sendTestWelcomeEmail, sendTestReportEmail, sendTestConfirmEmail } = require("./functions.mailtrap")
const { sendWelcomeEmail, sendReportEmail, sendConfirmEmail } = require("./functions.gmail")
const { MongoClient } = require("mongodb");
const uri = require("../config/config").db.uri

const client = new MongoClient(uri);

const DAY = 86400000;

async function run() {

    try {
        await client.connect();

        const database = client.db("CoronaCastdb");
        const collection = database.collection("UserData");

        const query = {

        };

        const options = {
            sort: { last: 1 }
        };

        const cursor = collection.find(query, options);

        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }

        //await cursor.forEach(doc => sendTestWelcomeEmail(doc.email, doc.first));

        //await cursor.rewind();

        await cursor.forEach(doc => {

            const endDate = new Date('10/24/2020');
            const startDate = new Date('10/24/2020');

            switch (doc.frequency) {
                case 'daily':
                    startDate.setTime(startDate.getTime() - DAY);
                    sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
                    break;
                case 'weekly':
                    startDate.setTime(startDate.getTime() - 6 * DAY);
                    sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
                    break;
                case 'bi-monthly':
                    startDate.setTime(startDate.getTime() - 14 * DAY);
                    sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
                    break;
                case 'monthly':
                    startDate.setTime(startDate.getTime() - 30 * DAY);
                    sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
                    break;
                case 'never':
                    break;
            }

        })

        //await cursor.rewind();

        //await cursor.forEach(doc => sendTestWelcomeEmail(doc.email, doc.first));
    } finally {
        await client.close();
    }
}
run().catch(console.dir);