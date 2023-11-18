import { Router } from "express";
import commentController from "../controller/comment.controller.js";

const commentRouter = Router();

commentRouter.post("/:id",commentController.addComment);
commentRouter.get("/:id",commentController.getAll);
commentRouter.put("/:id",commentController.updateComment);
commentRouter.delete("/:id",commentController.deleteComment);

export default commentRouter;