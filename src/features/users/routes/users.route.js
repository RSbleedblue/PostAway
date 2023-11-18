import express from "express";
import UserController from "../controller/users.controller.js";
import { errorHandlerMiddleware } from "../../../middelwares/errorHandler.js";
const userRouter = express.Router();

userRouter.post("/signup",errorHandlerMiddleware,UserController.signUp);
userRouter.post("/signin",errorHandlerMiddleware,UserController.signIn);
userRouter.get("/allUsers",errorHandlerMiddleware,UserController.getAll);

export default userRouter;