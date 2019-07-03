const express = require('express');
const router = express.Router();
const { getAllPosts,
        getAPost,
        createPost,
        updatePost,
        deletePost,
        getPostsByTag,
        getPostsByFollowing,
        getAllPostById } = require('../db/queries/postsQueries.js')


// USERS




// // GET api/posts  (Gets all users)
router.get('/', getAllPosts);

// // PATCH api/posts /:id (Allows the update of a posts  profile)
router.patch('/:id', updatePost);

// // POST api/posts  (Creates new posts
router.post('/', createPost);

// // DELETE api/posts /:id (Allows the posts to delete their account)
router.delete('/:id', deletePost);

//GET api/posts/tags/:id (Gets all posts that have the same tag)
router.get('/tags/:id', getPostsByTag);

//GET posts/followings (gets posts by the person the user follows)
router.get('/followings', getPostsByFollowing);

//GET (gets all posts that the req.user has made. This is used for blog/user profile)
router.get('/all', getAllPostById);

// GET api/posts /:id (Gets a specific posts by id)
router.get('/:id', getAPost);





module.exports = router;
