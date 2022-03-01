import {RequestHandler} from 'express';
import postModel from '../schemas/postSchema';
import commentModel from '../schemas/commentSchema'

const createComment : RequestHandler = async (req,res)=>{
    try {
        var newComment = new commentModel({
            post: req.params.postId,
            author: req.params.userId,
            content: req.body.content
        });
        const createdComment = await newComment.save();

        const addCommentPost = await postModel.findByIdAndUpdate(req.params.postId, {
            $push : {
                comments: createdComment._id
            }
        });
        res.json(createdComment);
    } catch (error) {
        res.send(error);
    }
}

const getComments : RequestHandler = async (req,res)=>{
    try {
        const comments = await commentModel.find();
        res.json(comments)
    } catch (error) {
        res.send(error);
    }
}

const editComment : RequestHandler = async (req,res)=>{
    try {
        const editedComment = await commentModel.findByIdAndUpdate(req.params.commentId, req.body);
        res.json(editedComment);
    } catch (error) {
        res.send(error);
    }
}

const deleteComment : RequestHandler = async (req,res)=>{
    try {
        const deletedComment = await commentModel.findByIdAndDelete(req.params.commentId);
        const deletedCommentPost = await postModel.findByIdAndUpdate(deletedComment.post,{
            $pull : {
                comments: deletedComment._id
            }
        });
        res.json(deletedComment);
    } catch (error) {
        res.send(error);
    }
}

export {
    createComment,
    getComments,
    editComment,
    deleteComment
}