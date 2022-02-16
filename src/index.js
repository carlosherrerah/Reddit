const express = require('express')
const morgan = require('morgan')
const config = require('./config.js')


//Routers
const userRouter = require('./routes/user.js')
//import userRouter from './routes/user.js';
//import postRouter from './routes/post.js';
//import commentRouter from './routes/comment.js';

//Server configuration 
const app = express();
app.listen(config.PORT, ()=>{
    console.log("Server running on port "+config.PORT);
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

//Default route
app.get('/', (req,res)=>{
    res.send("Default route, access to users/, posts/ or comments/ routes for functions.");
});

//Routes
app.use(userRouter);
//app.use(postRouter);
//app.use(commentRouter);
