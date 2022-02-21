class commentSchema {
    constructor(post,author,content){//Function with which we create the 'table' row
        this.post = post,
        this.author = author,
        this.content = content
    }
}

module.exports = commentSchema;