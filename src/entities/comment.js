class Comment {
	//fecha, usuario, texto, título, comentarios, likes, dislikes, tag?
	constructor(author, content, likes = 0, dislikes = 0) {
		this.author = author;
		this.content = content;
		this.likes = likes;
		this.dislikes = dislikes;
		this.date = new Date().toLocaleString();
	}
}

module.exports = {
	Comment
}
