import {RequestHandler} from 'express';
import userModel from '../schemas/userSchema';
import postModel from '../schemas/postSchema';
import commentModel from '../schemas/commentSchema';

//Functions for "Users"
const createUser: RequestHandler = async (req,res) =>{
    try {
        const userFound = await userModel.findOne({username: req.body.username});
        const emailFound = await userModel.findOne({email: req.body.email});
        if(userFound || emailFound)
            return res.status(301).json({error: "The username or email already exists"})
        else{
            const newUser = new userModel(req.body);
            const createUser = await newUser.save();
            res.json(createUser);
        }
    } catch (error) {
        res.json(error);
    }
}

const getUser: RequestHandler = async (req,res) =>{
    try {
        const user = await userModel.findById(req.params.userId).populate('posts');
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}

const getUsers: RequestHandler = async (req,res) =>{
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.json(error);
    }
}

const deleteUser: RequestHandler = async (req,res) =>{
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.userId);
        const deletedPosts = await postModel.deleteMany({author : deletedUser._id});
        const deletedComments = await commentModel.deleteMany({author : deletedUser._id})
        if (deletedUser && deletedPosts && deletedComments)
            res.json({message: "All the information of the user was deleted"});
    } catch (error) {
        res.json(error);
    }
}

export {
    createUser,
    getUser,
    getUsers,
    deleteUser
}