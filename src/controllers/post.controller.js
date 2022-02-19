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
    console.log('delete post');
}

module.exports = postController;

//Look a post by the Title
postController.findtitlePost = async (req, res)=>{
    console.log("Buscar un post por el titulo...");
    var collection = firebaseRef.ref(db, "Posts");                                       //Create and select the collection
    const Post = await firebaseRef.databaseFunctions.get(collection, req.body.title);   //Get the information in the collection       
    await FindPosts("New Mix");
    res.json(Post.key);
    res.send();
}

postController.FindPosts(userName) {
	//Código del filtro
	db.firebaseRef(collection)
	console.log("Filtrando por " + userName + "...");
}


