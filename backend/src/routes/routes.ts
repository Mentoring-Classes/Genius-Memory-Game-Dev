import { Router } from "express";
import { postUser } from '../controllers/postUser';
import { getUser } from '../controllers/getUser';

const router = Router();

router.get('/', (req:any, res:any) => {
  res.json({ message: 'Hello World' });
});

router.post("/user",postUser);
router.get("/user/:id",getUser);

export default router;