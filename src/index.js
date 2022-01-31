const express = require("express");
//Body parser
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//Listening event
app.listen(PORT, () => {
	console.log("[DEBUG] - LISTENING ON PORT " + PORT);
});

//Routes
require("./controllers/UserController")(app);