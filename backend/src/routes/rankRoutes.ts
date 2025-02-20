import { postRank, getRank, removeRank, patchRank } from '../controllers/Rank';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Rank route' });
});

router.post('/rank', (req: Request, res: Response) => {postRank(req, res);});
router.get('/rank/:id', (req: Request, res: Response) => {getRank(req, res);});
router.delete('/rank/:id', (req: Request, res: Response) => {removeRank(req, res);});
router.patch('/rank/:id', (req: Request, res: Response) => {patchRank(req, res);});

export default router;