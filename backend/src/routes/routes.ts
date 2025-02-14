import { NextFunction, Router } from "express";
import { postUser } from '../controllers/postUser';
import { getUser } from '../controllers/getUser';
import { deleteUser } from "../controllers/deleteUser";
import { patchUser } from "../controllers/patchUser";
import { Request, Response } from 'express';
const router = Router();

router.get('/', (req:Request, res:Response) => {
  res.json({ message: 'Hello World' });
});

// The asyncHandler function accepts a function 'func' that is expected
// to take (req: Request, res: Response) as arguments and return a Promise.
function asyncHandler(func: (req: Request, res: Response,  next: NextFunction) => Promise<any>) {

  // The function returned by asyncHandler is the actual middleware
  // that will be used in the route handler.
  return (req: Request, res: Response, next: NextFunction) => {

    // We call the 'func' passed into asyncHandler with the (req, res) parameters,
    // as these are the typical arguments passed to Express route handlers.
    // Since 'func' is expected to return a Promise, we await it.
    // If any error occurs (e.g., rejected Promise), it is caught by the '.catch()' block.
    func(req, res, next)
      // If the function inside asyncHandler throws an error or the Promise is rejected,
      // it will pass the error to the next middleware in the Express chain.
      .catch(next);
  };
}

router.post("/user", asyncHandler(postUser));
router.get("/user/:id", asyncHandler(getUser));
router.get("/user/:id", asyncHandler(getUser));
router.delete("/user/:id", asyncHandler(deleteUser));
router.patch("/user/:id", asyncHandler(patchUser));

export default router;