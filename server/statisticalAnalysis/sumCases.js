const covidController = require('../controllers/covidController.js');
exports.sumCases = (data) => {
    var sum = 0;
    for (var i = 0; i < data.length; i++){
        sum = sum + data[i].cases
    }
    return sum
}
