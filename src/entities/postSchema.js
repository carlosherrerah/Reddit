class Post {
    //Constructor.
    constructor(title,author,content,comments=[]){
        this.title = title,
        this.author = author,
        this.content = content,
        this.comments = comments
    }
}

export default Post;