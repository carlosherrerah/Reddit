import {Router} from 'express';
const router = Router();

//Import of Post controller
import * as postController from '../controllers/post.controller';

//Routes of "Post"
router.post('/posts/createPost/:userId', postController.createPost);
router.put('/posts/editPost/:idPost', postController.editPost);
router.get('/posts/getPosts', postController.getPosts);
router.get('/posts/getPostsPopulated', postController.getPostsPopulated);
router.delete('/posts/deletePost/:idPost', postController.deletePost);


export default router;