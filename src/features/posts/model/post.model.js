export default class PostModel{
    constructor(userId,caption,imageUrl,id){
        this.userId = userId,
        this.caption = caption,
        this.imageUrl = imageUrl,
        this.id = id
    }
    static addPost(postData){
        const newPost={
            userId: postData.userId,
            caption: postData.caption,
            imageUrl:postData.imageUrl
        };
        newPost.id = (posts.length+1).toString();
        posts.push(newPost);
        return posts;
    }
    static getAll(){
        return posts;
    }
    static findById(id) {
        const posts = PostModel.getAll();
        const foundPost = posts.find(post => post.id == id);
        return foundPost;
    }    
    static getByUserId(userId) {
       const userPosts = posts.filter((post) => post.userId === userId);
       return userPosts;
    }
    static deleteById(id){
        const index = posts.findIndex((post)=>post.id === id);
        if(index != -1){
            posts.splice(index,1);
            return posts;
        }
        else{
            return false;
        }
    }
    static update(id, updatedData) {
        const posts = this.getAll();
        const postIndex = posts.findIndex(post => post.id === id);
    
        if (postIndex !== -1) {
            const updatedPost = {
                ...posts[postIndex], 
                ...updatedData,      
            };
    
            posts[postIndex] = updatedPost;
    
            return { status: true, updatedPost };
        } else {
            return { status: false, res: "Post not Found" };
        }
    }
    
}


 var  posts = [{
    id:"1",
    userId:'CrazyDog123',
    caption:'Hi this is a beautiful post',
    imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fflower&psig=AOvVaw01TMmJtacwZRN5k6FFc8Cj&ust=1700073065116000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiX4OqPxIIDFQAAAAAdAAAAABAI',
    
},{
    id:"2",
    userId:'777Sam',
    caption:'Hi this is a Dragon',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.historyskills.com%2Fclassroom%2Fyear-7%2Fchinese-dragons%2F&psig=AOvVaw3SVLzHvy-8j43eC7r81AD9&ust=1700073137391000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiZ6Y2QxIIDFQAAAAAdAAAAABAI',
    
}
]