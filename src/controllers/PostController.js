const firebaseRef = require("../resources/database");
const HTTP_CODES = require("../resources/htppCodes");
const { Post } = require("../entities/post");
const { MD5 } = require("crypto-js");
const { UserPost } = require("../entities/userPost");
//Constantes chidas de lógica
const BASE_PATH = "/posts";


async function GetUserPostsRef(dbRef, userName) {
	let result = null;
	await firebaseRef.databaseFunctions.get(
		//Pass the child that we want to get information for
		firebaseRef.databaseFunctions.child(dbRef, userName)
	)
	//Ya se resolvió la promesa, aquí tienes tu valor cainal
	.then((snapshot) => {
		if (snapshot.exists())
			result = snapshot.val();
		else
			console.log("There were no users found!");
	});
	return result;
}

async function SyncPostUser(userName, post, key, db) {
	let usersLocationRef = firebaseRef.ref(db, "Usuario-Posts/" + post.author);
	//Obtener el usuario que queremos idealmente (y si es que existe de la base de datos)
	let userVal = await GetUserPostsRef(firebaseRef.ref(db), "Usuario-Posts/" + post.author);

	let userPostRel = new UserPost(userName, userVal);
	userPostRel.AddHashedPost(key.toString());

	//let toInsert = userVal == null ? [key.toString()] : userVal;

	await firebaseRef.databaseFunctions.set(
		usersLocationRef, userPostRel.hashedPosts
	);
}

async function CreatePost(rawPostData, db) {
	//Validation
	let post = new Post(rawPostData.author, 
		rawPostData.content, rawPostData.title,
		rawPostData.comments, rawPostData.likes,
		rawPostData.dislikes
	);

	let key = post.title + post.author + post.content;
	key = MD5(key);

	let postLocationRef = firebaseRef.ref(db, "Posts/" + key);

	await firebaseRef.databaseFunctions.set(
		postLocationRef, post
	);

	await SyncPostUser(post.author, post, key, db);
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