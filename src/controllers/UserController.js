const firebaseRef = require("../resources/database");

const BASE_PATH = "/users";

//Do this after the basic test for module exports
async function GetUsersFromDB(db) {
	let result = null
	await firebaseRef.databaseFunctions.get(
		//Pass the child that we want to get information for
		firebaseRef.databaseFunctions.child(db, "Users")
	).then((snapshot) => {
		if (snapshot.exists())
			result = snapshot.val();
		else
			console.log("There were no users found");
	});
	return result;
}

module.exports = function(app) {

	app.get(BASE_PATH, (req, res) => {
		res.send("Hello world!");
	});

	app.get(BASE_PATH + "/getAllUsers", async (req, res) => {
		let db = firebaseRef.ref(firebaseRef.getDatabase());
		let allUsers = await GetUsersFromDB(db);
		console.log(allUsers);
		res.send(allUsers);
	});

}
