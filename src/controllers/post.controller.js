const firebaseRef = require('../firebase.js');
const postSchema = require('../entities/postSchema');
const { isGeneratorObject } = require('util/types');
//Get the database from Firebase
const db = firebaseRef.getDatabase();

postController = {};

//Create a post (id of the author requested by params)
postController.createPost = async (req,res)=>{
    var userId = req.params.id;//Get the id from the link
    //Creation of the new post according to its schema
    var newPost = new postSchema(
        req.body.title,//Get from the request's json body
        userId,
        req.body.content
    );

    //DB operations
    var collection = firebaseRef.ref(db, "Posts");                                       //Create and select the collection
    const insertedPost = await firebaseRef.databaseFunctions.push(collection, newPost);  //Insert the information in the collection       
    res.json(insertedPost.key); 

    //Ingresar el key
    collection = firebaseRef.ref(db,"Users/"+userId+"/posts/"+insertedPost.key);
    const postUserRef = await firebaseRef.databaseFunctions.set(collection, "");  //Insert the information in the collection       
}

//Delete a post (id of the post requested by params)
postController.deletePost = async (req,res)=>{
    var id = req.params.id;
    var Comments = [];

    //Get comment's keys from the collection Comments related to the post
    var collection = firebaseRef.ref(db, "Posts/"+id+"/comments");
    var Comments = await (await firebaseRef.databaseFunctions.get(collection)).toJSON();
    Comments = Object.keys(Comments);

    //Delete comments from the collection Comments relate to the post
    for (let i = 0; i < Comments.length; i++) {
        collection = firebaseRef.ref(db, "Comments/"+Comments[i]);
        await firebaseRef.databaseFunctions.remove(collection);
    }

    //Delete the post
    collection = firebaseRef.ref(db, "Posts/"+id);
    await firebaseRef.databaseFunctions.remove(collection);
}

module.exports = postController;