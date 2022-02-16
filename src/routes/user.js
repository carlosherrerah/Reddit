const { Router } = require('express')
const config = require('../config.js')

const userController = require('../controllers/user.controller.js');

const userRouter = Router();

//Determinar con el team el funcionamiento
userRouter.post(config.USERROUTE +'/createUser',  userController.createUser);
userRouter.delete(config.USERROUTE + '/deleteUser', userController.deleteUser);

module.exports = userRouter;