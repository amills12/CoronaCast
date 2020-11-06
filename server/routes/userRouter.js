const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');

//gets all users
userRouter.get('/', userController.getAllUsers);

//creates a user
userRouter.post('/', userController.create);

//gets user by email
userRouter.get('/:email', userController.getByEmail);

//deletes a user
userRouter.delete('/:userID', userController.remove);

//shows one user
//userRouter.get('/:userID', userController.read);

module.exports = userRouter;
