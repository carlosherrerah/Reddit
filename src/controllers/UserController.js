const firebaseRef = require("../resources/database");
const User = require("../entities/user").User;
const HttpCodes = require("../resources/httpCodes");
const { SHA256 } = require("crypto-js");
const BASE_PATH = "/users";

//Do this after the basic test for module exports
async function GetUsersFromDB(db) {
	let result = null
	await firebaseRef.databaseFunctions.get(
		//Pass the child that we want to get information for
		firebaseRef.databaseFunctions.child(db, "Users")
	)
	.then((snapshot) => {
		if (snapshot.exists())
			result = snapshot.val();
		else
			console.log("There were no users found");
	});
	return result;
}

//This function validates the user is correct and then inserts it
async function InsertOrUpdateUser(rawData, db) {
	//Right now this is not very useful, but we can add certain validations later
	try {
		//This serves as validation
		let user = new User(
			rawData.userName, rawData.profilePicture, 
			rawData.email, rawData.password, rawData.followers,
			rawData.groups, rawData.posts
		);

		//THIS HAS TO BE DONE BY THE FRONTEND NO QUESTIONS!!!
		let hashedPassword = SHA256(user.password);
		let toInsert = {
			posts: user.posts,
			groups: user.groups,
			profilePicture: user.profilePicture,
			followers: user.followers,
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
		console.error(err);
		return false;
	}

}

async function DeleteUser(db, userName) {
	let locationRef = firebaseRef.ref(db, "Users/" + userName);
	firebaseRef.databaseFunctions.remove().then(() => {
		console.log("The user " + userName + " was deleted!!");
	})
	.catch(() => {
		console.log("The user " + userName + "was not found!!");
	});
}

module.exports = function(app) {

	app.get(BASE_PATH, (req, res) => {
		res.send("Hello world!");
	});

	app.get(BASE_PATH + "/getAllUsers", async (req, res) => {
		let db = firebaseRef.ref(firebaseRef.getDatabase());
		let allUsers = await GetUsersFromDB(db);
		
		console.log(allUsers);
		//Ask if they want to manage this inside an if or not
		res.status(allUsers === null ? HttpCodes.NO_CONTENT : HttpCodes.OK);
		res.send(allUsers);
	});

	//This is also updating
	app.post(BASE_PATH + "/createUser", async (req, res) => {
		let db = firebaseRef.getDatabase();
		let successfulInsert = await InsertOrUpdateUser(req.body, db);
		res.status(successfulInsert === false ? HttpCodes.INTERNAL_SERVER_ERROR : HttpCodes.CREATED);
		res.send();
	});

	app.delete(BASE_PATH + "/deleteUser", async (req, res) => {
		let db = firebaseRef.getDatabase();
		DeleteUser(db, req.query.user);
		res.send("The user " + req.query.user + " has been deleted!");
	});

}
