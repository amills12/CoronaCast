const chai = require('chai');
const assert = require('chai').assert;
const mongoose = require('mongoose');

describe('DataBase Test', () =>{
    before((done) =>{
        mongoose.connect(process.env.DB_URI || require('../config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', () => {
            done();
        });
    });

    it('Sanity Test', (done) =>{
        assert(true);
        done();
    });

    it('Can Connect to Database', () =>{
        assert(mongoose.connection.readyState === 1);
    });

    //Close connection
    after((done)=>{
        mongoose.connection.close(done);
    });
});
