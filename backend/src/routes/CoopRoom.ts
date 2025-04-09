import { createRoom } from '../controllers/CoopRoom';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/coopRoom', (req: Request, res: Response) => { createRoom(req, res); });

export default router;