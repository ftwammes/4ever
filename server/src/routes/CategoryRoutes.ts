import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const router = Router();

router.get('/list', CategoryController.list);
router.get('/listAll', CategoryController.listAll);
router.post('/subscribe', CategoryController.subscribe);
router.delete('/unsubscribe', CategoryController.unsubscribe);

export default router;