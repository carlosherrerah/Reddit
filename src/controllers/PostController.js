const firebaseRef = require("../resources/database");
const HTTP_CODES = require("../resources/htppCodes");
const { Post } = require("../entities/post");
const { MD5 } = require("crypto-js");
//Constantes chidas de lógica
const BASE_PATH = "/posts";


async function CreatePost(rawPostData, db) {
	//Validation
	let post = new Post(rawPostData.author, 
		rawPostData.content, rawPostData.title,
		rawPostData.comments, rawPostData.likes,
		rawPostData.dislikes
	);

	let key = post.title + post.author + post.content;
	key = MD5(key);

	let locationRef = firebaseRef.ref(db, "Posts/" + key);

	await firebaseRef.databaseFunctions.set(
		locationRef, post
	);
}

module.exports = function (app) {

	app.get(BASE_PATH, async (req, res) => {
		console.log("Controlador de publicaciones!");
	});

	app.post(BASE_PATH + "/createPost", async (req, res) => {
		let db = firebaseRef.getDatabase();
		console.log(req.body);
		await CreatePost(req.body, db);
		res.send(HTTP_CODES.CREATED);
	});
}