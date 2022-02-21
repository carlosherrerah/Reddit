const firebaseRef = require('../firebase.js');
const commentSchema = require('../entities/commentSchema');
const { Router } = require('express');
const firebase = require('../firebase.js');
const { get } = require('firebase/database');
//Get the database from Firebase
const db = firebaseRef.getDatabase();

commentController = {};

//Create a comment (determinar)
commentController.createComment = async (req,res)=>{
    //Obtained from the request link
    var userId = req.params.user_id;
    var postId = req.params.post_id;
    //Creation of the new comment according to its schema
    var newComment = new commentSchema(
        postId,
        userId,
        req.body.content//Obtained from the request's json
    );

    //DB operations
    var collection = firebaseRef.ref(db, "Comments");                                       //Create and select the collection
    const insertedComment = await firebaseRef.databaseFunctions.push(collection, newComment);  //Insert the information in the collection       
    res.json(insertedComment.key); 

    //Ingresar el key
    collection = firebaseRef.ref(db,"Posts/"+postId+"/comments/"+insertedComment.key);
    const commentPostRef = await firebaseRef.databaseFunctions.set(collection, "");  //Insert the information in the collection       
}

//Delete a comment (if of the comment requested by params)
commentController.deleteComment = async (req,res)=>{
    var id = req.params.id;

    //Get post's key to which the comment is related to
    collection = firebaseRef.ref(db, "Comments/"+id+"/post")
    var post = await firebaseRef.databaseFunctions.get(collection);

    //Remove comment from the colletion Posts
    var collection = firebaseRef.ref(db, "Posts/"+post.val()+"/comments/"+id);
    await firebaseRef.databaseFunctions.remove(collection);

    //Remove comment from the collection Comments
    var collection = firebaseRef.ref(db, "Comments/"+id);
    await firebaseRef.databaseFunctions.remove(collection);
    
}

module.exports = commentController;

