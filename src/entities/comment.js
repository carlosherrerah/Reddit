class Comment {
	//fecha, usuario, texto, título, comentarios, likes, dislikes, tag?
	constructor(author, post, content) {
		this.author = author;
		this.post = post;
		this.content = content;
		this.date = new Date().toLocaleString();
	}
}

module.exports = {
	Comment
}
