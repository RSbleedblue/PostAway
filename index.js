import express from "express";
import usersRoutes from "./src/features/users/routes/users.route.js";
import postRouter from "./src/features/posts/routes/post.routes.js";
import commentRouter from "./src/features/comment/routes/comment.route.js";
import likeRouter from "./src/features/like/routes/like.routes.js";
import { errorHandlerMiddleware } from "./src/middelwares/errorHandler.js";
import cors from 'cors';
const app = express();
var corsOptions = {
    origin: "http://localhost:3700"
}

app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);
app.use("/api",usersRoutes);
app.use("/api/posts",postRouter);
app.use("/api/comments",commentRouter);
app.use("/api/likes",likeRouter);



export default app;