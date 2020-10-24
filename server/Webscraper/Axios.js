const axios = require('axios');
const cheerio = require('cheerio')
const url = 'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv';
//<div class="col-xs-12 col-md-12 outer--box outer--box--left">
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
