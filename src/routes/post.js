const { Router } = require('express')
const config = require('../config.js')//Route import
const postRouter = Router();
const postController = require('../controllers/post.controller.js');//Controller import

//Routes, the corresponding controller functions are referenced here
postRouter.post(config.POSTROUTE+'/createPost/:id', postController.createPost);
postRouter.delete(config.POSTROUTE+'/deletePost/:id', postController.deletePost);

module.exports = postRouter;