import {Schema, model} from 'mongoose';
import mongoose from 'mongoose'
//Structure (schema) of Posts in MongoDB
const postSchema = new Schema({
    title:{
        type: String,   //Data type
        required: true, //No tengo que explicarlo
        trim: true      //Removes blank spaces at the beginning/end
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    content:{
        type: String,
        required: true,
        trim: true
    },
    comments:{
        type: mongoose.Types.ObjectId
    },
    likes:{
        type: mongoose.Types.ObjectId,
    }
},{
    versionKey:false,
    timestamps: true
});

export default model('post', postSchema);