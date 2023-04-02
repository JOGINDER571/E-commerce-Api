//import 
import mongoose from "mongoose";
//making product schema
const productModal=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

const product=mongoose.model("product",productModal);
//export product
export default product;