import {Schema, model} from 'mongoose';
import mongoose from 'mongoose'
//Structure (schema) of Posts in MongoDB

const commentSchema = new Schema ({
    post: {
        type: mongoose.Types.ObjectId,
        ref: "post",
        required: true
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey:false,
    timestamps: true
});

export default model('comment',commentSchema);