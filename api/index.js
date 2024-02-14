import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

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
});

app.use(express.json());
app.use('/api/user',userRoutes);