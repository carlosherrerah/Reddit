
class User {
	constructor(userName, profilePicture, email, password, followers = [], groups = [], posts = []) {
		this.userName = userName;
		this.profilePicture = profilePicture;
		//As an example validation, if the pfp does not conatin 
		//.png or .jpg or .jpeg let's send an error
		if (!this.ValidatePfp(profilePicture)) {
			throw new Error("The given profile picture link is not supported!");
		}
		this.email = email;
		//In the future, if the password received is not 64 characters long, reject it
		//This is bc passwords in SHA-256 are 64c in length
		this.password = password;
		this.followers = followers;
		this.groups = groups;
		this.posts = posts;
	}

	ValidatePfp(profilePictureLink) {
		let pattern = ".+(\\.jpg|\\.png|\\.jpeg|\\.gif)";
		let matcher = new RegExp(pattern);
		return matcher.test(profilePictureLink);
	}

}

module.exports = {User};
