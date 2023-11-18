
import PostModel from "../../posts/model/post.model.js";

class CommentModel {
    constructor(postId, userId, text) {
        this.postId = postId;
        this.userId = userId;
        this.text = text;
        this.commentId = CommentModel.generateCommentId();
    }

    static generateCommentId() {
        return Date.now().toString();
    }

    static addComment(postId, userId, text) {
        const comment = new CommentModel(postId, userId, text);
        const post = PostModel.findById(postId);

        if (!post) {
            throw new Error("Post not found");
        }

        if (!post.comments) {
            post.comments = [];
        }

        post.comments.push(comment);
        comments.push(comment);

        return comment;
    }

    static getAllCommentsForPost(postId) {
        const post = PostModel.findById(postId);

        if (!post || !post.comments) {
            return [];
        }

        return post.comments;
    }

    static updateComment(commentId, updatedText) {
        const commentToUpdate = comments.find(comment => comment.commentId === commentId);

        if (!commentToUpdate) {
            throw new Error("Comment not found");
        }

        commentToUpdate.text = updatedText;

        return commentToUpdate;
    }

    static deleteComment(commentId) {
        const commentIndex = comments.findIndex(comment => comment.commentId === commentId);

        if (commentIndex === -1) {
            throw new Error("Comment not found");
        }

        const deletedComment = comments.splice(commentIndex, 1)[0];

        return deletedComment;
    }
}

const comments = [];

export default CommentModel;
