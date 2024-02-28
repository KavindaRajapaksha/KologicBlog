import express from 'express';
import { createComment,getPostComments,likeComment,editComment,deleteComment,getcomments } from '../controllers/comment.controller.js';
import { verifyToken } from '../utills/verifyUser.js';

const router = express.Router();

router.post('/create',verifyToken,createComment);
router.get('/getPostComments/:postId',getPostComments);
router.put('/likeComment/:commentId',verifyToken,likeComment);
router.put('/editComment/:commentId',verifyToken,editComment);  
router.delete('/deleteComment/:commentId',verifyToken,deleteComment);
router.get('/getcomments', verifyToken, getcomments);


export default router;