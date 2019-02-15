const express = require('express');
const router = express.Router();
const { getAllPosts,
        getAPost,
        createPost,
        updatePost,
        deletePost,
        getPostsByTag } = require('../db/queries/postsQueries.js')


// USERS
// // GET api/posts  (Gets all users)
router.get('/', getAllPosts);

// // GET api/posts /:id (Gets a specific posts by id)
router.get('/:id', getAPost);

// // PATCH api/posts /:id (Allows the update of a posts  profile)
router.patch('/:id', updatePost);

// // POST api/posts  (Creates new posts
router.post('/', createPost);

// // DELETE api/posts /:id (Allows the posts to delete their account)
router.delete('/:id', deletePost);

//GET api/posts/tags/:id (Gets all posts that have the same tag)
router.get('/tags/:id', getPostsByTag);



module.exports = router;
