//import {getString} from './CoronaScraper.js'
// so this function csv() is supposed ot tak in a stream fromstream() and parse it into a json object. 
// if you use the request module it only parses the first line of the website into a json object. 
// in axios.js I was able to request the full file in a continuous stream but I'm not sure how to pass the html object into the fromstream().
const request=require('request')
const axios = require('axios');
const csv=require('csvtojson')
const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
const csvFilePath='covidCases.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  
    console.log(jsonObj);
})