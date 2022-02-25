import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import config from './config';
import './controllers/database.controller';
import userRoutes from './routes/user';
import postRoutes from './routes/post';
import commentRoutes from './routes/comment'

const app = express();

//App settings
app.listen(config.PORT, ()=>{
    console.log("Server on port", config.PORT);
});
app.use(express.json());                //Allows the reading of .json objects to the API
app.use(urlencoded({extended: false})); //Allows the reading of pop forms

//Middleware
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use(userRoutes);
app.use(postRoutes);
//app.use(commentRoutes);