const covidController = require('../controllers/covidController.js');
exports.sumCases = (data) => {
    return (data[data.length - 1].cases) - (data[0].cases);
}
