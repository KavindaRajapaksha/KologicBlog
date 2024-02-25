import express from 'express';
import { verifyToken } from '../utills/verifyUser.js';
import { create,getpost,deletepost } from '../controllers/post.controller.js';
const router = express.Router();

router.post('/create',verifyToken,create)
router.get('/getposts',getpost)
router.delete('/deletepost/:postId/:userId',verifyToken,deletepost)



export default router;