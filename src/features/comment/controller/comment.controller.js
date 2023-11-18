
import CommentModel from "../model/comment.model.js";
import PostModel from "../../posts/model/post.model.js";

class CommentController {
    static getAll(req, res) {
        try {
            const postId = req.params.id;
            const comments = CommentModel.getAllCommentsForPost(postId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static addComment(req, res) {
        try {
            const postId = req.params.id;
            const userId = req.body.userId;
            const text = req.body.text;
            const post = PostModel.findById(postId);

            if (!post) {
                return res.status(404).send("Post not found");
            }

            const newComment = CommentModel.addComment(postId, userId, text);

            return res.status(201).json(newComment);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static updateComment(req, res) {
        try {
            const postId = req.params.id;
            const commentId = req.params.commentId;
            const updatedText = req.body.updatedText;

            const updatedComment = CommentModel.updateComment(commentId, updatedText);

            return res.status(200).json(updatedComment);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static deleteComment(req, res) {
        try {
            const postId = req.params.id;
            const commentId = req.params.commentId;

            const deletedComment = CommentModel.deleteComment(commentId);

            return res.status(200).json(deletedComment);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default CommentController;
