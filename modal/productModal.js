import mongoose from "mongoose";

const productModal=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
    }
})

const product=mongoose.model("product",productModal);
export default product;