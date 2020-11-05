import * as userController from '../controllers/userController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const userRouter = express.Router();

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


export default userRouter;
