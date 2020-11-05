import User from "../models/userModel.js";

// Create a user
export const create = async (req, res) => {
  /* get the user data from req.body */
  /* Then save the user to the database */
  const user = req.body;
  if (!user) {
    return res.status(200).send({
      error: "Could not create user",
    });
  }
  await new User(user).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

// Show the current user
export const read = async (req, res) => {
  /*get the user id from the req.params */
  /* send back the user data as json from the request */
  /* If the user data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
  let id = req.params.userID;
  await User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          error: "User not found with an Id " + id,
        });
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};


// Delete a user
export const remove = async (req, res) => {
  let id = req.params.userID;

  await User.deleteOne({ _id: id }, (err) => {
    if (err) {
      return res.status(200).send({
        error: err.message || "An unknown error occurred",
      });
    }
    res.send({
      error: id + " has been deleted successfully",
    });
  });
};

// Retrieve all the directory, Users
export const getAllUsers = async (req, res) => {
  //sends docs as json
  await User.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};
