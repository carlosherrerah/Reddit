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

app.get('/', ()=>{
    res.send("Default route, acces to users/, posts/ or comments/ routes.");
});

app.listen(config.PORT, ()=>{
    console.log("Server running on port "+config.PORT);
});
>>>>>>> origin/fArevalo
