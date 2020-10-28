const csv=require('csvtojson')
const csvFilePath='covidCases.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

    console.log(jsonObj);
})