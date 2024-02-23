import { errorHandler } from "../utills/error.js"
import Post from "../models/postModel.js"

export const create = async (req, res,next) => {
  
    if(!req.user.isAdmin){
        return  next(errorHandler(403,'You are not allowed to create a post'))
    }
    if(!req.body.title || !req.body.content){
        return next(errorHandler(400,'Please provide all require fields'))
    }
    const slug = req.body.title.toLowerCase().split(' ').join('-').replace(/[^a-zA-Z0-9-]/g, "-");
    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id,
      });
    try{
        const savePost=await newPost.save()
        res.status(201).json(savePost)
    }catch(err){
        next(err)
    }
  

}