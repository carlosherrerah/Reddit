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