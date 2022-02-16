const { Router } = require('express')
const config = require('../config.js')
const commentRouter = Router();
const commentController = require('../controllers/comment.controller.js');

//Routes
commentRouter.post(config.COMMENTROUTE+'/createComment/:user_id/:post_id', commentController.createComment);
commentRouter.delete(config.COMMENTROUTE+'/deleteComment/:id', commentController.deleteComment);

module.exports = commentRouter;