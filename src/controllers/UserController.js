//Imports
const { User } = require("../entities/user");
const { SHA256 } = require("crypto-js");
const firebaseRef = require("../resources/database");
const HTTP_CODES = require("../resources/htppCodes");
//Constantes chidas de lógica
const BASE_PATH = "/users";

async function GetUsersFromDB(db) {
	let result = null;
	await firebaseRef.databaseFunctions.get(
		//Pass the child that we want to get information for
		firebaseRef.databaseFunctions.child(db, "Users")
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

async function CreateUser(rawData, db) {
	try {
		//Validation
		let user = new User(
			rawData.userName, rawData.profilePicture,
			rawData.email, rawData.password,
			rawData.posts
		);
		let hashedPassword = SHA256(user.password);

		let toInsert = {
			posts: user.posts,
			profilePicture: user.profilePicture,
			email: user.email,
			hash: hashedPassword.toString()
		};

		let locationRef = firebaseRef.ref(db, "Users/" + user.userName);

		await firebaseRef.databaseFunctions.set(
			locationRef, toInsert
		);
		return true;
	}
	catch(err) {
		console.log("An error has occured: " + err);
		return false;
	}
}

module.exports = function (app) {
	app.get(BASE_PATH, (req, res) => {
		res.send("Hola Mundo desde usuarios!");
	});

	app.get(BASE_PATH + "/getAllUsers", async (req, res) => {
		let db = firebaseRef.ref(firebaseRef.getDatabase());
		let allUsers = await GetUsersFromDB(db);

		console.log(allUsers);
		res.status(allUsers === null ? HTTP_CODES.NO_CONTENT : HTTP_CODES.OK);
		res.send(allUsers);
	});

	app.post(BASE_PATH + "/createUser", async (req, res) => {
		let db = firebaseRef.getDatabase();
		let wasInserted = await CreateUser(req.body, db);
		res.status(wasInserted === false ? HTTP_CODES.INTERNAL_SERVER_ERROR : HTTP_CODES.CREATED);
		res.send("Read body!");
	});

}
