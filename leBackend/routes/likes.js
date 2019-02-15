const express = require('express');
const router = express.Router();
const { getAllLikes,
        getALike,
        createLike,
        deleteLike,
        getLikesByPost } = require('../db/queries/likesQueries.js')

// LIKES
// // GET api/likes (Gets all likes)
router.get('/', getAllLikes);

// // GET api/tags/:id (Gets a specific like by id)
router.get('/:id', getALike);

// // POST api/tags (Creates new like)
router.post('/', createLike);

// // DELETE api/likes (delete like)
router.delete('/:id',deleteLike)

//GET api/tags/posts/:id
router.get('/posts/:id',getLikesByPost )


module.exports = router;
