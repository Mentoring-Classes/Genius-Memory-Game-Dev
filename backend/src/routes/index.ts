import { Router } from 'express';
import userRoutes from './userRoutes';
import rankRoutes from './rankRoutes';

const router = Router();

router.use(userRoutes);
router.use(rankRoutes);

export default router;
