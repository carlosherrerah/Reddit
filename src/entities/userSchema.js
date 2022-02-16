const { SHA256 } = require("crypto-js");

class userSchema {
        constructor(username, email, password, posts = []) {
                this.username = username,
                this.email = email,
                this.hashedPassword = SHA256(password).toString(),
                this.posts = posts;
        }
}

module.exports = userSchema;
