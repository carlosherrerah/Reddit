import {Router} from 'express';
const router = Router();

//Import User Controller
import * as userController from '../controllers/user.controller';

//Routes of "User"
router.get('/users/getUsers', userController.getUsers);
router.get('/users/getUser/:userId', userController.getUser);
router.post('/users/createUser', userController.createUser);
router.delete('/users/deleteUser/:userId', userController.deleteUser);

export default router;