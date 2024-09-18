import mongoose from "mongoose";

export const connectDB = async () => { 
    await mongoose.connect('mongodb+srv://brightochinaza:74869141@cluster0.hbuxn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}