
import dotenv from 'dotenv';
import connecDB from './db/index.js';


dotenv.config(
    { path: './.env' }
);


connecDB()














// import mongoose from "mongoose";
// import express from "express";
// import {DB_name} from "constants.js";
// const env = require('./env');

// const app = express();

// ( async ()=>{
//     try {

//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
//         console.log(`Connected to MongoDB: ${DB_name}`);

//         app.on("error",(error)=>{
//             console.error("MongoDB connection error: ", error);
//             throw error;
//         })
        
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//        console.error(error); 
//     }
// })()