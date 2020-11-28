const CovidModel = require("../models/covidModel.js");
const {linearFitCases} = require("../statisticalAnalysis/linearFit.js")
const {linearFitDeaths} = require("../statisticalAnalysis/linearFitDeaths.js")
const {sumCases} = require("../statisticalAnalysis/sumCases.js")
const {sumDeaths} = require("../statisticalAnalysis/sumDeath.js")


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
        json.log(data)
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
                

        //I added functions that run a simple linear fit on the time frame you put the data in for cases and deaths and also 
        //sums the data for seaths and cases in that time frame. 
        message = [
            {"type": "daily new case estimate", "value": linearFitCases(data)},
            {"type": "daily new death estimate","value": linearFitDeaths(data)},
            {"type": "cases in range",          "value": sumCases(data)},
            {"type": "deaths in range",         "value": sumDeaths(data)}
        ]
        res.json(message);
        console.log(m[1])
    });
};     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
