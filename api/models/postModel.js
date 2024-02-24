import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({  
 
    userId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:false,
        default:'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png'
    },
    category:{
        type:String,
        required:false,
        default:'Uncategorized'
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }






 },{timestamps:true});

const Post = mongoose.model('Posts',postSchema);
export default Post;