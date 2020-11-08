const mongoose = require('mongoose') ;

const covidSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    county:{ type: String, required: true },
    state: { type: String, required: true },
    fips: {type: Number, required: false}, 
    cases: {type: Number,required: true}, 
    deaths: {type: Number, required: true}
},
    {collection: 'covidmodels'}

);


module.exports = mongoose.model('covidModel', covidSchema);
