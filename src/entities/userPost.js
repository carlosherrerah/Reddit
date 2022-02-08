//Esta clase es estrictamente una relación de (1)User -> (M)Posts

class UserPost {
	constructor(userName, hashedPosts = []) {
		this.userName = userName;
		this.hashedPosts = hashedPosts;
	}

	AddHashedPost(hashedPost) {
		this.hashedPosts.push(hashedPost);
	}

}

module.exports = {UserPost};
