import { Router } from 'express';
import config from '../config.js'
import * as commentCTRL from '../controllers/comment.controller.js';

const router = Router();

//Determinar con el team el funcionamiento
//router.post(config.COMMENTROUTE+'/createComment/:id', commentCTRL.createComment());
//router.get(config.COMMENTROUTE+'/getComment/:id', commentCTRL.createComment());

export default router;
