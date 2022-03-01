import {Schema, model} from 'mongoose';
import mongoose from 'mongoose'
//Structure (schema) of Users in MongoDB

const userSchema = new Schema({
    username:{
        type: String,   //Data type
        unique: true,   //Unique attribute
        required: true, //No tengo que explicarlo
        trim: true      //Removes blank spaces at the beginning/end
    },
    email:{
        type: String,   
        unique: true,   
        required: true, 
        trim: true      
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    posts:[{
        type: mongoose.Types.ObjectId,
        ref: 'post'
    }]
},{
    versionKey:false,
});

export default model('user', userSchema);