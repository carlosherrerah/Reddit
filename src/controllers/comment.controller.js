const firebaseRef = require('../firebase.js');
const commentSchema = require('../entities/commentSchema')
//Get the database from Firebase
const db = firebaseRef.getDatabase();

commentController = {};

//Create a comment (determinar)
commentController.createComment = async (req,res)=>{
    console.log('create comment');
}

//Delete a comment (if of the comment requested by params)
commentController.deleteComment = async (req,res)=>{
    console.log('delete comment');
}

module.exports = commentController;