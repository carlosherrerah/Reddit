const firebaseRef = require('../firebase.js');
const postSchema = require('../entities/postSchema')
//Get the database from Firebase
const db = firebaseRef.getDatabase();

postController = {};

//Create a post (id of the author requested by params)
postController.createPost = async (req,res)=>{
    console.log('create post');
}

//Delete a post (id of the post requested by params)
postController.deletePost = async (req,res)=>{
    console.log('delete post');
}

module.exports = postController;