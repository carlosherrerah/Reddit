import express from 'express';
import config from './config.js'
const app = express();

app.get('/', ()=>{
    res.send("Default route, acces to users/, posts/ or comments/ routes.");
});

app.listen(config.PORT, ()=>{
    console.log("Server running on port "+config.PORT);
});