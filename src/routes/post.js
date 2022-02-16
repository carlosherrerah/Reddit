import { Router } from 'express';
import config from '../config.js'
import * as postCTRL from '../controllers/post.controller.js';

const router = Router();

//Determinar con el team el funcionamiento
//router.post(config.POSTROUTE+'/createPOST/:id', postCTRL.createPost());
//router.get(config.POSTROUTE+'/getPosts/', commentCTRL.getPosts());
//router.delete(config.POSTROUTE+'/deletePosts/', commentCTRL.deletePost());


export default router;