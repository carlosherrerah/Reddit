import {Router} from 'express';
const router = Router();

//Import of Post controller
import * as postController from '../controllers/post.controller';

//Routes of "Post"
router.post('/posts/createPost/:userId', postController.createPost);
router.put('/posts/editPost/:postId', postController.editPost);
router.get('/posts/getPosts', postController.getPosts);
router.get('/posts/getPost/:postId', postController.getPost);
router.get('/posts/getPostsPopulated', postController.getPostsPopulated);
router.delete('/posts/deletePost/:postId', postController.deletePost);


export default router;