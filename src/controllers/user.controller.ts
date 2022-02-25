import {RequestHandler} from 'express';
import userModel from '../schemas/userSchema';

//Functions for "Users"

const createUser: RequestHandler = async (req,res) =>{
    try {
        const userFound = await userModel.findOne({username: req.body.username});
        const emailFound = await userModel.findOne({email: req.body.email});
        if(userFound || emailFound)
            return res.status(301).json({error: "The username or email already exists"})
        else{
            const newUser = new userModel(req.body);
            const qry = await newUser.save();
            res.json(qry);
        }
    } catch (error) {
        res.json(error);
    }
}

const getUser: RequestHandler = async (req,res) =>{
    try {
        const qry = await userModel.findById(req.params.id);
        res.json(qry);
    } catch (error) {
        res.json(error);
    }
}

const getUsers: RequestHandler = async (req,res) =>{
    try {
        const qry = await userModel.find();
        res.json(qry);
    } catch (error) {
        res.json(error);
    }
}

const deleteUser: RequestHandler = async (req,res) =>{
    try {
        const qry = await userModel.findByIdAndDelete(req.params.id);
        if (qry)
            res.json({message: "User deleted"});
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