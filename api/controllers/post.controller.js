import Post from '../models/post.model.js'
import { errorHandler } from '../utils/error.js'

export const create = async (req, res, next) => {
    console.log(req.body);
    if (!req.body.coffeeName) {
        return next(errorHandler(400, 'Please provide the name'));
    }

    const slug = req.body.coffeeName
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');

    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id,
    });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error);
    }
};

export const getposts = async (req, res, next) => {
    try {
        const id = req.user.id;
        const posts = await Post.find({userId: id});
        
        res.status(200).json({
            posts
        })
    } catch (error) {
        next(error);
    }
}


