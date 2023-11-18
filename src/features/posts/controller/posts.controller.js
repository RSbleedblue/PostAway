import PostModel from "../model/post.model.js";
import jwtAuth from "../../../middelwares/jwtAuth.js";
import UserModel from "../../users/model/users.model.js";
export default class postsController{
    static allPost(req,res){
        const posts = PostModel.getAll();
        if(posts){
            console.log(posts);
            return res.status(200).send(posts);
        }
        else{
            return res.status(400).send('No Posts Yet');
        }
    }
    static byId(req,res){
        const id = req.params.id;
        const post = PostModel.findById(id);
        if(post){
            console.log(post);
            return res.status(200).send(post);
        }
        else{
            return res.status(400).send('No Post Found');
        }
    }
    static addPost(req, res) {
        const { name, caption, imageUrl } = req.body;
        const user = UserModel.getByUserName(name);
    
        if (!user) {
            return res.status(400).send('User not found');
        }
        const postData = {
            userId: user.name,
            name,
            caption,
            imageUrl,
        };
        const check = PostModel.addPost(postData);
        if (check) {
            console.log('Added');
            return res.status(200).send(check);
        } else {
            return res.status(400).send('Unable');
        }
    }
    
    static getByUserId(req, res) {
        const userId = req.UserId;
        const userPosts = PostModel.getByUserId(userId);
    
        if (userPosts) {
            return res.status(200).send(userPosts);
        } else {
            return res.status(400).send('No Posts Found for the User');
        }
    }
    
    static deleteById(req,res){
        const id = req.params.id;
        const delItem = PostModel.deleteById(id);
        if(delItem){
            return res.status(201).send(delItem);
        }
        else{
            return res.status(401).send("Post not found");
        }
    }

    static updateById(req, res) {
        const id = req.params.id;
        const { caption, imageUrl } = req.body;
        const data = { caption, imageUrl };
    
        const { status, updatedPost } = PostModel.update(id, data);
    
        if (status) {
            return res.status(200).send(updatedPost);
        } else {
            return res.status(404).send('Post not found');
        }
    }
    
    
    
    
    
}