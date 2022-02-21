const { SHA256 } = require("crypto-js");//Encryption library import

class userSchema {
        constructor(username, email, password, posts = []) {//Function with which we create the 'table' row
                this.username = username,
                this.email = email,
                this.hashedPassword = SHA256(password).toString(),//Password encryption
                this.posts = posts;
        }
}

module.exports = userSchema;
