const express = require('express');
const router = express.Router();
const { getAllTags,
        getATag,
        createTag,
        getTagsByPost,
        getAllTagsOfPost,
        createPostTag
    } = require('../db/queries/tagsQueries.js')

// TAGS
// // GET api/tags (Gets all tags)
router.get('/', getAllTags);

// // POST api/tags (Creates new tag)
router.post('/', createTag);

//GET /tags/posts/
router.get('/posts', getAllTagsOfPost)

//post a tag and post link
router.post('/posts/', createPostTag)

//GET api/tags/posts/:id
router.get('/posts/:id', getTagsByPost)


 // // GET api/tags/:id (Gets a specific user by id)
 router.get('/:id', getATag);



module.exports = router;
