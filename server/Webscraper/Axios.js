const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
//this file just prints the csv file from the link above. 
axios(url)
  .then(response => {
    const html = response.data;
    timeout: 50000
    const $ = cheerio.load(html, {
        xmlMode: true,
    })
    console.log(html)
  })
  .catch(console.error);
