import * as userController from '../controllers/userController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const userRouter = express.Router();

userRouter.post('/', userController.create);

export default userRouter;
