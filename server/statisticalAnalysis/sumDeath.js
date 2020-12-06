const covidController = require('../controllers/covidController.js');
exports.sumDeaths = (data) => {
    return (data[data.length - 1].deaths) - (data[0].deaths);
}
