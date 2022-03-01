import { Router } from 'express';
const router = Router();

//Import of Comment controller
import * as commentController from '../controllers/comment.controller';

//Routes of "Post"
router.get('/comments/getComments', commentController.getComments);
router.post('/comments/createComment/:postId/:userId', commentController.createComment);
router.put('/comments/editComment/:commentId', commentController.editComment);
router.delete('/comments/deleteComment/:commentId', commentController.deleteComment);

export default router;