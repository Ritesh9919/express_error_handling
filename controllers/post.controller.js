import {Post} from '../models/post.model.js';
import {ApiError,ApiResponse} from '../utils/index.js'



const createPost = async(req, res, next)=> {
    try {
        const {content} = req.body;
    if(!content) {
        throw new ApiError(400, "Content is required");
    }

    const post = await Post.create({content});
    return res.status(201)
    .json(new ApiResponse(200, {post}, "Post created successfully"));
    } catch (error) {
        next(error);
    }
    
}

const getAllPosts = async(req, res, next)=> {
    try {
        const posts = await Post.find();
   if(!posts) {
    throw new ApiError(404, 'Posts not found');
   }

   return res.status(200)
    .json(new ApiResponse(200, {posts}, "Post fetched successfully"));
    } catch (error) {
        next(error);
    }
   
}




export {
    createPost,
    getAllPosts
}