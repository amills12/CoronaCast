const express = require('express');
const covidStatsRouter = express.Router();
const covidController = require('../controllers/covidController.js');

covidStatsRouter.get('/:state&:county&:startDate&:endDate', covidController.getPrediction);

module.exports = covidStatsRouter;