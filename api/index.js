import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error:',err.message);
});
const app=express();

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT+'...');
})