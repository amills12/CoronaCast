const User = require("../models/userModel.js");
const { sendWelcomeEmail, sendConfirmEmail, sendReportEmail, sendReport } = require("../emails/functions.gmail.js")

// Create a user
exports.create = async (req, res) => {
  /* get the user data from req.body */
  /* Then save the user to the database */
  const userData = req.body;
  if (!userData) {
    return res.status(200).send({
      error: "Could not create user",
    });
  }
  await new User(userData).save()
    .then((data) => {
      sendWelcomeEmail(data.email, data.first);
      sendReportEmail(data.email, data.county, data.state, '2020-10-24', data.frequency);
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};


// Show the current user
exports.read = async (req, res) => {
  /*get the user id from the req.params */
  /* send back the user data as json from the request */
  /* If the user data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
  let id = req.params.userID;
  await User.findById(id)
    .then((userData) => {
      if (!userData) {
        return res.status(200).send({
          error: "User not found with an Id " + id,
        });
      }
      res.json(userData);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};


exports.getByEmail = async (req, res) => {
  let em = req.params.email;

  await User.findOne({ email: em }, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred"
      });
    return res.json(data);
  })
};

//deletes user by email
exports.deleteByEmail = async (req, res) => {
  let em = req.params.email;

  await User.deleteOne({ email: em }, (err, data) => {

    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred"
      });
    res.send({
      message: em + " has been deleted successfully",
    });
  })

};

exports.update = async (req, res) => {
  const userData = req.body;
  const em = req.params.email;

  await User.findOne({ email: em }, (err, data) => {
    data.email = userData.email;
    data.state = userData.state;
    data.county = userData.county;
    data.first = userData.first;
    data.last = userData.last;
    data.frequency = userData.frequency;

    data.save((err, data) => {
      if (err)
        return res.status(200).send({
          message: err.message || "An unknown error occurred"
        });
      sendConfirmEmail(data.email, data.first);
      res.json(data);
    })
  })
};

// Retrieve all the directory, Users
exports.getAllUsers = async (req, res) => {
  //sends docs as json
  await User.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};
