import { Router } from 'express';
import MarkedNewsController from '../controllers/MarkedNewsController';

const router = Router();

router.get('/list', MarkedNewsController.list);
router.post('/mark', MarkedNewsController.mark);
router.delete('/unmark', MarkedNewsController.unmark);

export default router;