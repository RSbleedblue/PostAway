import express, { Router } from 'express';
import postsController from '../controller/posts.controller.js';
import jwtAuth from '../../../middelwares/jwtAuth.js';
import { errorHandlerMiddleware } from '../../../middelwares/errorHandler.js';

const postRouter = Router();

postRouter.get('/all',errorHandlerMiddleware,postsController.allPost);
postRouter.get('/:id',errorHandlerMiddleware,postsController.byId);
postRouter.get('/', jwtAuth,errorHandlerMiddleware, postsController.getByUserId);
postRouter.post('/',jwtAuth,errorHandlerMiddleware,postsController.addPost);
postRouter.delete('/:id',errorHandlerMiddleware,jwtAuth,postsController.deleteById);
postRouter.put("/:id",errorHandlerMiddleware,postsController.updateById);

export default postRouter;