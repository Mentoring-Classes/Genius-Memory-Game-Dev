import { postUser } from '../controllers/postUser';
import { getUser } from '../controllers/getUser';
import { deleteUser } from "../controllers/deleteUser";
import { patchUser } from "../controllers/patchUser";
import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

// Async handler with proper typing
function asyncHandler<T = void>(
  func: (req: Request, res: Response, next: NextFunction) => Promise<T>
): (req: Request, res: Response, next: NextFunction) => void {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
}

router.post("/user", asyncHandler(postUser));
router.get("/user/:id", asyncHandler(getUser));
router.delete("/user/:id", asyncHandler(deleteUser));
router.patch("/user/:id", asyncHandler(patchUser));

export default router;
