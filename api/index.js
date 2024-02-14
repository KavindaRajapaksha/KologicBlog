import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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
app.use('/api/auth',authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message
    });
  });
  