import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connecDB = async ()=>{
    try {
        
        const connectDataBase = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("mongodb connected to " , connectDataBase.connection.host);


    } catch (error) {
        console.error("Error in connecDB" , (error)=>{
            console.error(error);
        });
    }
}

export default connecDB;