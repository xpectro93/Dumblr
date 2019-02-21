const express = require('express');
const router = express.Router();
const { getAllTags,
        getATag,
        createTag,
        getTagsByPost} = require('../db/queries/tagsQueries.js')

// TAGS
// // GET api/tags (Gets all tags)
router.get('/', getAllTags);

// // GET api/tags/:id (Gets a specific user by id)
router.get('/:id', getATag);

// // POST api/tags (Creates new tag)
router.post('/', createTag);

//GET api/tags/posts/:id
router.get('/posts/:id', getTagsByPost )
 // loginRequired,

module.exports = router;
