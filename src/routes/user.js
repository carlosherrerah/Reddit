const { Router } = require('express')
const config = require('../config.js')
const userRouter = Router();
const userController = require('../controllers/user.controller.js');

//Routes
userRouter.post(config.USERROUTE +'/createUser',  userController.createUser);
userRouter.delete(config.USERROUTE + '/deleteUser', userController.deleteUser);

module.exports = userRouter;