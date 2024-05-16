import express from 'express';
const router = express.Router();
import {createPost, getAllPosts} from '../controllers/post.controller.js';

router.post('/', createPost);
router.get('/', getAllPosts);


export default router;