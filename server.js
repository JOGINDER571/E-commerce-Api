import app from "./app.js";
import { connectDB } from "./db.js";

const startServer = ()=>{
    connectDB();
    const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at PORT no :${PORT}`)
});
};

export default startServer;