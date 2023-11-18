import PostModel from "../../posts/model/post.model.js";
export default class likeModel{
    constructor(like){
        this.like = like;
    }
    static getLike(id){
        const posts = PostModel.getAll().find((post)=>{
            return post.id == id;
        })
        if(!posts){
            posts.likes=[];
        }
        else{
            const likes = posts.likes.push(posts.likes.length+1);
        }
        return likes;
    }
    static toggleLike(postId, userId) {
        const post = PostModel.getAll().find((post)=>{
            return post.id == id;
        }) 

        if (!post) {
            throw new Error("Post not found");
        }

        const existingLikeIndex = post.likes.findIndex(like => like.userId === userId);

        if (existingLikeIndex !== -1) {
            post.likes.splice(existingLikeIndex, 1);
            return { liked: false, likesCount: post.likes.length };
        } else {
            const newLike = { userId: userId, timestamp: Date.now() };
            post.likes.push(newLike);
            return { liked: true, likesCount: post.likes.length };
        }
    }
}