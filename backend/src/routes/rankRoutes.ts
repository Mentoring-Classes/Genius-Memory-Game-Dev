import { post, get, remove, patch } from '../controllers/Rank';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Rank route' });
});

router.post('/rank', (req: Request, res: Response) => {post(req, res);});
router.get('/rank/:id', (req: Request, res: Response) => {get(req, res);});
router.delete('/rank/:id', (req: Request, res: Response) => {remove(req, res);});
router.patch('/rank/:id', (req: Request, res: Response) => {patch(req, res);});

export default router;