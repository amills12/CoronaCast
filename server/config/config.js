//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://Admin:BANANAS@cluster0.bxxig.mongodb.net/CoronaCastdb?retryWrites=true&w=majority', //place the URI of your mongo database here.
    },
    gmail: {
        user: "coronacast.dev@gmail.com",
        pass: "RuntimeTerrorFall2020"
    }
};
