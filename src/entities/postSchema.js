class postSchema {
    constructor(title, author, content, comments = []) {
        this.title = title,
        this.author = author,
        this.content = content,
        this.comments = comments;
    }
}

module.exports = postSchema;
