const firebaseRef = require('../firebase.js');
const userSchema = require('../entities/userSchema')
//Get the database from Firebase
const db = firebaseRef.getDatabase();

userController = {};

//Create a user 
userController.createUser = async (req,res)=>{
    //Creation of the new user according to its schema
    var newUser = new userSchema(//All information is obtained from the request's json body
        req.body.username, 
        req.body.email, 
        req.body.password
    );
    
    //DB operations
    var collection = firebaseRef.ref(db, "Users");                                       //Create and select the collection
    const insertedUser = await firebaseRef.databaseFunctions.push(collection, newUser);  //Insert the information in the collection       
    res.json(insertedUser.key);                                                          //Key of the inserted user in Firebase as a response from the server (Not needed)
}

//Elimination of a user according to its key
userController.deleteUser = async (req,res)=>{
    var id = req.params.id;
    var collection = firebaseRef.ref(db, "Users");
}


module.exports = userController;
