import User from "../models/userModel.js";

// Create a football club 
export const create = async (req, res) => {
  /* get the football club data from req.body */
  /* Then save the FootballClub to the database */
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
