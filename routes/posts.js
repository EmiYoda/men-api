const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//* GET ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: error});
    }
});

//* SUMBITS A POST
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            imageUrl: req.body.imageUrl,
            autor: req.body.autor,
        });

         const savedPost = await post.save();
         res.json(savedPost);
    } catch (error) {
        return res.status(500).json({massage: error})
    }
});

//* SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

//* DELET A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (error) {
        res.json({message: error});
    }
});

//* UPDATE A POST 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedPost);
    } catch (error) {
        res.json({message: error});
    }
})

module.exports = router;
