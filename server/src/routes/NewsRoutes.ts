import { Router } from 'express';
import NewsController from '../controllers/NewsController';

const router = Router();

router.get('/', NewsController.list);
router.get('/:id', NewsController.get);

export default router;