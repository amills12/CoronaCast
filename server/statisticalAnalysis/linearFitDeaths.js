const covidController = require('../controllers/covidController.js');
const ss = require('simple-statistics');


exports.linearFitDeaths = (data) => {
    //[[cases, day], [cases, day]...]
    var lm = []
    for(var i = 0; i < data.length; i++){
        lm[i] = [i, data[i].deaths]
    }
    // console.log(lm);
    var linearFit = ss.linearRegression(lm);
    // console.log(data)
    // console.log("the m is how much cases are expected ot increase over the next day.");
    // console.log(linearFit.m);
    return linearFit.m;
}
