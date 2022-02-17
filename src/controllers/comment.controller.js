const firebaseRef = require('../firebase.js');
const commentSchema = require('../entities/commentSchema')
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
    console.log('delete comment');
}

module.exports = commentController;