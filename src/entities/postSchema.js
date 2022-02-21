class postSchema {
    constructor(title, author, content, comments = []) {//Function with which we create the 'table' row
        this.title = title,
        this.author = author,
        this.content = content,
        this.comments = comments;
    }
}

module.exports = postSchema;
