import express from 'express';
import {test} from '../controllers/user.controller.js';
import {updateUser,deleteUser,signout,getUsers} from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';



const router=express.Router();


router.get('/test',test);
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',signout);
router.get('/getusers',verifyToken,getUsers)


export default router;