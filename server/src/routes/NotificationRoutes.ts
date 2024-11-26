import { Router } from 'express';
import NotificationController from '../controllers/NotificationController';

const router = Router();

router.get('/list', NotificationController.list);
router.put('/read', NotificationController.read);

export default router;