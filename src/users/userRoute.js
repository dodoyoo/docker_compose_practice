const express = require('express');
const userController = require('./userController');

const userRouter = express.Router();

userRouter.post('/sign-up', userController.signUp);

module.exports = { userRouter };
