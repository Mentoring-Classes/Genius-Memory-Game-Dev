import { create, get, remove, update  } from '../controllers/User';
import { Request, Response, Router } from 'express';
import { encryptPassword } from '../middlewares/encryptPassword';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

router.post("/user", encryptPassword, (req: Request, res: Response) => { create(req, res) });
router.get("/user/:id", (req: Request, res: Response) => { get(req, res) });
router.delete("/user/:id", (req: Request, res: Response) => { remove(req, res) });
router.patch("/user/:id", encryptPassword, (req: Request, res: Response) => { update (req, res) });

export default router;
