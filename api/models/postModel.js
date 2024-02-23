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
        default:'https://images.app.goo.gl/Xw35KGp9oZyKy5Aj7'
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