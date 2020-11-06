"use strict";
/*
  Import modules/files you may need to correctly run the script.
 */
import { readJsonFile } from "./readJson.js";
import covidModel from "./models/covidModel.js";
import { fstat } from "fs";

const count = async () => {
  // This prints the count to the console
  // FootballClub.countDocuments({}, (err, c) => console.log("count is", c))
  // This returns a promise that stores the count and has to be awaited
  const docCount = await covidModel.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const report = async (err, str) => {
  if (err) {
    throw err;
  }
  const c = await count();
  console.log(str, c);
};

const saveDataInDB = async (covidData) => {
  //save all clubs into the database
  return await new Promise(async (res, rej) => {
    /*
    for(var i = 0; i < covidData.length; i++){
      covidModel.insertOne(covidData[i], (err, docs)=>{
        if (err) rej(err);
        res(docs);
      });
    }
    */
    console.log("inserting many");
    covidModel.insertMany(covidData, async (err, docs) => {
      if (err) rej(err);
      res(docs);
    });
  });
};

const deleteDataInDB = async () => {
  //delete all clubs from the database
  return await covidModel.deleteMany((err) => {
    if (err) throw err;
  });
};

const jsonToMongo = () => {
  const done = true;
  return new Promise(async (res, rej) => {
    /*
    Instantiate a mongoose model for each football club object in the JSON file,
    and then save it to your Mongo database
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
   */
    //delete the existing entries to start fresh
    //don't do this unless you're sure you want to. 
    await deleteDataInDB();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile()
      .then(async (covidData) => {
        //save the data into the database
        
        await saveDataInDB(covidData)
          .then(async (data) => {
            //check if the footballClub data has been saved successfully
            await report(null, "All %d documents have been added.");
            res(done);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export { saveDataInDB, deleteDataInDB, count, jsonToMongo };
