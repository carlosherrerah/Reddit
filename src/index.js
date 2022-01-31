const express = require("express");
//Body parser implementation, do this after you explained the routes
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
//Listening event
app.listen(PORT, () => {
	console.log("[DEBUG] - LISTENING ON PORT " + PORT);
});

//Body parser implementation, do this after you explained the routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
require("./controllers/UserController")(app);