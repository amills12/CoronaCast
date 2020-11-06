const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    state: { type: String, required: true },
    county:{ type: String, required: true },
    first:{ type: String, required: true },
    last:{ type: String, required: true },
    frequency:{ type: String, required: true }
},
    {collection: 'UserData'}
);

module.exports = mongoose.model('userData', userSchema);
