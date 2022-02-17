const { Router } = require('express')
const config = require('../config.js')//Route import
const userRouter = Router();
const userController = require('../controllers/user.controller.js');//Controller import

//Routes, the corresponding controller functions are referenced here
userRouter.post(config.USERROUTE +'/createUser',  userController.createUser);
userRouter.delete(config.USERROUTE + '/deleteUser', userController.deleteUser);

module.exports = userRouter;