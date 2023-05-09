import mongoose from "mongoose";
import { MOONGOSE_URI } from "./config.js";

export const connectionDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(MOONGOSE_URI, {useNewUrlParser: true});
        console.log("Database connection succesfull");
    } catch (error) {
        console.log(error);
    }
}