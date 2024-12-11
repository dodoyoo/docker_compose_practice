const express = require('express');
const userController = require('./userController');

const userRouter = express.Router();

userRouter.post('/sign-up', userController.signUp);
userRouter.get('/sign-in', userController.signIn);

module.exports = { userRouter };
