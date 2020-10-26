//import {getString} from './CoronaScraper.js'

const request=require('request')
const axios = require('axios');
const csv=require('csvtojson')
const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
 
csv()
.fromStream(request.get(url))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
      console.log(json)

        // long operation for each json e.g. transform / write into database.
    })
});