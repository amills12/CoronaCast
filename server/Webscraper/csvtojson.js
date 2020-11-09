import csv2json from "csv2json";
import fs from "fs";
/*
const csvFilePath='covidCases.csv'

csvtojson()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj)
    fs.writeFile('covidCases.json', jsonObj, function(err){
        if (err)
        return console.log(err);
      })  
}).catch(console.error)
*/

const source = fs.createReadStream('covidCases.csv');
const output = fs.createWriteStream('covidCases.json');
 source
   .pipe(csv2json())
   .pipe(output );