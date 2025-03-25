import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const router = Router();
const userController = new UserController();

router.get('/users', authMiddleware, roleMiddleware(['admin']), userController.getAllUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.put('/users/:id', authMiddleware, roleMiddleware(['admin']), userController.updateUser);
router.delete('/users/:id', authMiddleware, roleMiddleware(['admin']), userController.deleteUser);

export default router;