import { Router } from "express";
import likeController from "../controller/like.controller.js";

const likeRouter = Router();

likeRouter.get("/:id",likeController.getLikebyPost);
likeRouter.get("/toggle/:id",likeController.toggleLike);

export default likeRouter;