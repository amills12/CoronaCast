const ss = require('simple-statistics');


exports.linearFitCases = (data) => {
    //[[cases, day], [cases, day]...]
    var lm = []
    for(var i = 0; i < data.length; i++){
        lm[i] = [i, data[i].cases]
    }
    var linearFit = ss.linearRegression(lm);
    
    //The m is how much cases are expected ot increase over the next day.
    return linearFit.m;
}
