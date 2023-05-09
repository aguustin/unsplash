import express from 'express';
import unsplashRouter from "./routes/unplashroutes.js";
import morgan from "morgan";
import { PORT } from "./config.js";
import fileUpload from "express-fileupload";
import { connectionDB } from "./database.js";

const app = express();
connectionDB();

//settings
app.set("case sensitive routing", true);


//middlewares
app.use(express.text());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({ 
    useTempFiles: true,
    tempFileDir:'./uploads'
}))

//routes
app.use(unsplashRouter);
app.use(morgan("dev"));

//listen

app.listen(PORT);
console.log("listen por in server: ", PORT);