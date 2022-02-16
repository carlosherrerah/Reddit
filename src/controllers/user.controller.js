const firebaseRef = require('../firebase.js');
const userSchema = require('../entities/userSchema')
const db = firebaseRef.getDatabase();

userController = {};

userController.createUser = async (req,res)=>{
    var newUser = new userSchema(
        req.body.username, 
        req.body.email, 
        req.body.password,
        req.body.posts);
    
    var collection = firebaseRef.ref(db, "Users");
    const inserted = await firebaseRef.databaseFunctions.push(collection, newUser);
    res.json(inserted.key);
}

userController.deleteUser = async (req,res)=>{
    res.send("borro user");
}

module.exports = userController;