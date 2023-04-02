import app from "./app.js";
//import database
import { connectDB } from "./db.js";
//
const startServer = ()=>{
    //connect the database
    connectDB();
    const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at PORT no :${PORT}`)
});
};

export default startServer;