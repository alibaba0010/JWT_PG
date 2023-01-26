import { Router } from "express";
import { addNewUser } from "../controllers/user.controller";
const userRouter = Router();
userRouter.post("/", addNewUser).get();
export default userRouter;
