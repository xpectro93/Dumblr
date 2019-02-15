const express = require('express');
const router = express.Router();
const { getAllBlogs,
        getABlog,
        createBlog,
        updateBlog,
        deleteBlog } = require('../db/queries/blogsQueries.js')


// BLOGS
// // GET api/blogs (Gets all blogs)
router.get('/', getAllBlogs);

// // GET api/blogs/:id (Gets a specific blog by id)
router.get('/:id', getABlog);

// // PATCH api/blogs/:id (Allows the update of a blogs profile)
router.patch('/:id', updateBlog);

// // POST api/blogs (Creates new blog)
router.post('/', createBlog);

// // DELETE api/blogs/:id (Allows the blog to delete their account)
router.delete('/:id', deleteBlog);


module.exports = router;
