class Post {
	//fecha, usuario, texto, título, comentarios, likes, dislikes, tag?
	constructor(author, content, title, comentarios = [], likes = 0, dislikes = 0) {
		this.author = author;
		this.content = content;
		this.title = title;
		this.comentarios = comentarios;
		this.likes = likes;
		this.dislikes = dislikes;
		this.date = new Date().toLocaleString();
	}
}

module.exports = {
	Post
}
