//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        //place the URI of your mongo database here.
        uri: 'mongodb+srv://Admin:BANANAS@cluster0.bxxig.mongodb.net/CoronaCastdb?retryWrites=true&w=majority' 
    },
    gmail: {
        //place your gmail login credentials here.
        user: "coronacast.dev@gmail.com",
        pass: "RuntimeTerrorFall2020"
    },
    mailtrap: {
        //place your mailtrap login credentials here.
        user: "9c9fdf870787f6",
        pass: "583895d2c35a5b"
    }
};
