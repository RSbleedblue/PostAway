import likeModel from "../model/like.model.js";
export default class likeController{
    static getLikebyPost(req,res){
        const postId = req.params.id;
        const postWL = likeModel.getLike(postId);
        if(!postWL){
            return res.send(404).send("post not found");
        }
        else{
            return res.send(201).send(postWL);
        }
    }
    static toggleLike(req,res){
        try {
            const postId = req.params.postId;
            const userId = req.params.userId;
    
            const likeResult = LikeModel.toggleLike(postId, userId);
    
            res.status(200).json(likeResult);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}