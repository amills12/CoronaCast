const express = require('express');
const covidModelRouter = express.Router();
const covidController = require('../controllers/covidController.js');

//gets all json objects using the find funciton. 
covidModelRouter.get('/:state&:county&:startDate&:endDate', covidController.getAllCounty);

module.exports = covidModelRouter;