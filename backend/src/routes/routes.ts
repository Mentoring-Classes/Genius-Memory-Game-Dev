import { Router } from "express";
import { postUser } from '../controllers/postUser';
import { getUser } from '../controllers/getUser';
import { deleteUser } from "../controllers/deleteUser";

const router = Router();

router.get('/', (req:any, res:any) => {
  res.json({ message: 'Hello World' });
});

router.post("/user",postUser);
router.get("/user/:id",getUser);
router.delete("/user/:id",deleteUser);

export default router;