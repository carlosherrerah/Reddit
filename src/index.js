const express = require('express')
const morgan = require('morgan')
const config = require('./config.js')


//Routers
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');
const commentRouter = require('./routes/comment.js')

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

//Routes being used
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
