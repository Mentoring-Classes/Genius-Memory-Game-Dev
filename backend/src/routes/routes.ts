import { postUser, getUser, deleteUser, patchUser} from '../controllers/User';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

router.post("/user", (req:Request,res: Response) => {postUser(req, res)});
router.get("/user/:id", (req:Request,res: Response) => {getUser(req,res)});
router.delete("/user/:id", (req:Request,res: Response) => {deleteUser(req,res)});
router.patch("/user/:id", (req:Request,res: Response) => {patchUser(req,res)});

export default router;
