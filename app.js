//import package
import express from "express"
import dotENV from "dotenv";
import startServer from "./server.js";
import router from "./routes.js";
import bodyParser from "body-parser";
const app=express();

app.use(express.json());

//  Importing dotENV file
dotENV.config({ 
    path: "./config/config.env" 
});

app.get('/',(req,res)=>{
    res.send("home page");
});
//set the router
app.use("/products",router);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

export default app;

startServer();

