const CovidModel = require("../models/covidModel.js");
const {linearFitStuff} = require("../statisticalAnalysis/linearFit.js")


//getPrediction()
//getCasesInRange()
//getDeathsInRange()
exports.getAllCounty = async (req, res) => {
    const _state_ = req.params.state;
    const _county_ = req.params.county;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    await CovidModel.find({ 
        state: _state_,
        county: _county_,
        date: {
            $gte: new Date(startDate),
            $lt: new Date(endDate)
        }
        }, (err, data) => {
        if (err)
            return res.status(200).send({
                message: err.message || "An unknown error occurred",
            });
        res.json(data);
    });
};
                                                 
exports.getPrediction = async (req, res) => {
    const _state_ = req.params.state;
    const _county_ = req.params.county;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

    await CovidModel.find({ 
        state: _state_,
        county: _county_,
        date: {
            $gte: new Date(startDate),
            $lt: new Date(endDate)
        }
        }, (err, data) => {
        if (err)
            return res.status(200).send({
                message: err.message || "An unknown error occurred",
            });
                
        // console.log(startDate);
        // console.log(endDate);
        newdata = linearFitStuff(data);
        res.json(newdata);
    });
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                