import express from 'express';
import { verifyToken } from '../utills/verifyUser.js';
import { create,getpost } from '../controllers/post.controller.js';
const router = express.Router();

router.post('/create',verifyToken,create)
router.get('/getposts',getpost)



export default router;