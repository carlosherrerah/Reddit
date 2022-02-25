import mongoose, {ConnectOptions} from 'mongoose';
import config from '../config';

(async () =>{
    const mongoDBOptions: ConnectOptions = {
        /* In case we have a User and Pass for MongoDB
        user: config.MONGO_USER,
        pass: config.MONGO_PASS
        */
    }
    try {
        //Connection to the database
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`);
        console.log("DB created and connected with name:", db.connection.name);    
    } catch (error) {
        console.log("Not able to connect to MongoDB, error: ", error);
    }
})();
