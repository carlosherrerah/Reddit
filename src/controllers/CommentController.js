const firebaseRef = require("../resources/database");
const HTTP_CODES = require("../resources/htppCodes");
const { Comment } = require("../entities/comment");
const { MD5 } = require("crypto-js");
//Constantes chidas de lógica
const BASE_PATH = "/comments";

async function CreateComment(rawCommentData, db) {
	//Validation
	let comment = new Comment(rawCommentData.author, rawCommentData.post, 
		rawCommentData.content
	);

	let postLocationRef = firebaseRef.ref(db, "Comments");

	await firebaseRef.databaseFunctions.set(
		postLocationRef, comment
	);
}

module.exports = function (app) {

	app.post(BASE_PATH + "/createComment", async (req, res) => {
		let db = firebaseRef.getDatabase();
		console.log(req.body);
		await CreateComment(req.body, db);
		res.send(HTTP_CODES.CREATED);
	});
}