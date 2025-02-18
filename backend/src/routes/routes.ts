import { post, get, remove, patch} from '../controllers/User';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

router.post("/user", (req:Request,res: Response) => {post(req, res)});
router.get("/user/:id", (req:Request,res: Response) => {get(req,res)});
router.delete("/user/:id", (req:Request,res: Response) => {remove(req,res)});
router.patch("/user/:id", (req:Request,res: Response) => {patch(req,res)});

export default router;
