const { Router } = require('express')
const config = require('../config.js')
const postRouter = Router();
const postController = require('../controllers/post.controller.js');

//Routes
postRouter.post(config.POSTROUTE+'/createPost/:id', postController.createPost);
postRouter.delete(config.POSTROUTE+'/deletePost/:id', postController.deletePost);

module.exports = postRouter;