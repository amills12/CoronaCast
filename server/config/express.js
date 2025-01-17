const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    exampleRouter = require('../routes/examples.server.routes'),
    
    //Import routers here
    userRouter = require('../routes/userRouter'),
    covidModelRouter = require('../routes/covidModelRouter'),
    covidStatsRouter = require('../routes/covidStatsRouter');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {console.log("Successfully connected to mongoose database!");},
    error =>{console.log("MongoDB connection error: " + error)});

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    app.use(cors())

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
      }));

    // add a router
    app.use('/api/userData', userRouter);
    app.use('/api/covidData', covidModelRouter);
    app.use('/api/covidStats', covidStatsRouter);
    app.use('/api/example', exampleRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

