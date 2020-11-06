import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";
const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
//this file just downloads the csv file from the link above. 
axios(url)
  .then(response => {
    const html = response.data;
    timeout: 50000
    const $ = cheerio.load(html, {
        xmlMode: true,
    })
    fs.writeFile('covidCases.csv', html, function(err){
      if (err)
      return console.log(err);
    })  
  })
  .catch(console.error);
