
class User {
	constructor(userName, profilePicture, email, password, posts = []) {
		this.userName = userName;
		this.profilePicture = profilePicture;
		if (!this.ValidatePfp(profilePicture)) {
			throw new Error("The given profile picture link is not supported!");
		}
		this.email = email;
		this.password = password;
		this.posts = posts;
	}

	ValidatePfp(profilePicture) {
		let pattern = ".+(\\.jpg|\\.png|\\.jpeg|\\.gif)";
		let matcher = new RegExp(pattern);
		return matcher.test(profilePicture);
	}

}

module.exports = {User};
