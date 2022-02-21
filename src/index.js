<<<<<<< HEAD
<<<<<<< HEAD
const express = require("express");
//Body parser
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//Listening event
app.listen(PORT, () => {
	console.log("[DEBUG] - LISTENING ON PORT " + PORT);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Routes
require("./controllers/UserController")(app);
require("./controllers/PostController")(app);
require("./controllers/CommentController")(app);
=======
import express from 'express';
import config from './config.js'
const app = express();
=======
const express = require('express')
const morgan = require('morgan')
const config = require('./config.js')
>>>>>>> origin/eMejia


//Routers
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');
const commentRouter = require('./routes/comment.js')

//Server configuration 
const app = express();
app.listen(config.PORT, ()=>{
    console.log("Server running on port "+config.PORT);
});
<<<<<<< HEAD
>>>>>>> origin/fArevalo
=======
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

//Default route
app.get('/', (req,res)=>{
    res.send("Default route, access to users/, posts/ or comments/ routes for functions.");
});

//Routes being used
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
>>>>>>> origin/eMejia
