import {Router} from 'express';
const router = Router();

//Import of Post controller
import * as postController from '../controllers/post.controller';

//Routes of "Post"
router.get('/users/createPost', postController.createPost);
router.delete('/users/deletePost', postController.deletePost);

export default router;