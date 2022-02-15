//Esta clase es estrictamente una relación de (1)Post -> (M)Comment

class PostComment {
	constructor(postTitle, hashedComments = []) {
		this.postTitle = postTitle;
		this.hashedComments = hashedComments;
	}

	AddHashedPost(hashedPost) {
		this.hashedComments.push(hashedPost);
	}

}

module.exports = {PostComment};
