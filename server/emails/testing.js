const { sendTestWelcomeEmail, sendTestReportEmail } = require("./template.mailtrap")
const { MongoClient } = require("mongodb");
const uri = require("../config/config").db.uri

const client = new MongoClient(uri);
const info = []
const sDate = new Date('10/22/2020')
const eDate = new Date('10/28/2020')

async function run() {
    try {
        await client.connect();

        const database = client.db("CoronaCastdb");
        const collection = database.collection("covidmodels");

        const query = {
            date: {
                $gte: sDate,
                $lt: eDate
            },
            county: {
                $eq: "Alachua"
            },
            state: {
                $eq: "Florida"
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
        sendTestReportEmail("test@coronacast.dev", "10/22/2020", "10/28/2020", info)
        await client.close();
    }
}
run().catch(console.dir);
