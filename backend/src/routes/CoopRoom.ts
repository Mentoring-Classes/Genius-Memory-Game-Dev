import { createRoom } from '../controllers/CoopRoom';
import { Request, Response, Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/coopRoom/create', authMiddleware,(req: Request, res: Response) => { createRoom(req, res); });

export default router;