import { Router } from 'express';
import UserController from '../controllers/userController.js';

const router = Router();
const userController = new UserController();

router.get('/:id', userController.getUserById.bind(userController));

export default router;