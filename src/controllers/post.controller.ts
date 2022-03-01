import {RequestHandler} from 'express';
import mongoose from 'mongoose';
import commentModel from '../schemas/commentSchema'
import postModel from '../schemas/postSchema';
import userModel from '../schemas/userSchema';

const getPost: RequestHandler = async (req,res) =>{
    try {
        const postFoundPopulated = await postModel.findById(req.params.postId).populate('author').populate('comments');
        res.json(postFoundPopulated);
    } catch (error) {
        res.json(error);
    }
}

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
        const postsFoundPopulated = await postModel.find().populate('author');
        res.json(postsFoundPopulated);
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
            var Post = new postModel({
                title: req.body.title,
                author: userId,
                content: req.body.content,
            });
            const newPost = await Post.save();

            const updatedUser = await userModel.findByIdAndUpdate(req.params.userId,
                {
                    $push : {
                        posts: newPost._id
                    }
                }
            );
            res.json(newPost);
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
        const editedPost = await postModel.findByIdAndUpdate(req.params.postId, req.body)
        res.json(editedPost);
    } catch (error) {
        res.json(error);
    }
}

const deletePost: RequestHandler = async (req,res) =>{
    try {
        const deletedPost = await postModel.findByIdAndDelete(req.params.postId);
        const deletedPostUser = await userModel.findByIdAndUpdate(deletedPost.author,
            {
                $pull:{
                    posts: deletedPost._id
                }
            }
        );
        const deletedComments = await commentModel.deleteMany({post : deletedPost._id});
        res.json(deletedPostUser);
    } catch (error) {
        res.json(error);
    }
}

export{
    getPost,
    getPosts,
    getPostsPopulated,
    createPost,
    editPost,
    deletePost
}