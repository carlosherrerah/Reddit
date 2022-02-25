import {RequestHandler} from 'express';
import mongoose from 'mongoose'
import postModel from '../schemas/postSchema';
import userModel from '../schemas/userSchema';

const getPosts: RequestHandler = async (req,res) =>{
    try {
        const postsFound = await postModel.find();
        res.json(postsFound);
    } catch (error) {
        res.json(error);
    }
}

const getPostsPopulated: RequestHandler = async (req,res) =>{
    try {
        const postsFound = await postModel.find().populate('author');
        res.json(postsFound);
    } catch (error) {
        res.json(error);
    }
}

const createPost: RequestHandler = async (req,res) =>{
    try {
        const userFound = await userModel.findById(req.params.userId);
        console.log(userFound);
        if(userFound){
            var userId = new mongoose.Types.ObjectId(req.params.userId);
            var newPost = new postModel({
                title: req.body.title,
                author: userId,
                content: req.body.content,
            });
            const qry = await newPost.save();
            res.json(qry);
        }
        else {
            res.status(302).json({error: "The user doesnt exist"});
        }
    } catch (error) {
        res.json(error);
    }
}

const editPost: RequestHandler = async (req,res) =>{
    try {
        const editedPost = await postModel.findByIdAndUpdate(req.params.idPost, req.body)
        res.json(editedPost);
    } catch (error) {
        res.json(error);
    }
}

const deletePost: RequestHandler = async (req,res) =>{
    try {
        const qry = await postModel.findByIdAndDelete(req.params.idPost);
        res.json(qry);
    } catch (error) {
        res.json(error);
    }
}

export{
    getPosts,
    getPostsPopulated,
    createPost,
    editPost,
    deletePost
}