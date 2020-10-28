import userRouter from './routes/userRouter.js';
import express from 'express';
import {connectToDatabase} from './connectMongodb.js';

//connect to database
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
  db.once("open", () => {
    console.log("Successfully connected to mongoose database!");
    
  });


// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users/', userRouter);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
