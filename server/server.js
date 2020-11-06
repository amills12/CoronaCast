const express = require('./config/express.js')
//import {connectToDatabase} from './connectMongodb.js';
//await jsonToMongo()
//console.log("\n database populated with covid cases.")

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init();

app.listen(port, () => console.log(`Server now running on port ${port}!`));
