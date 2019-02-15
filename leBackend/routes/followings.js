const express = require('express');
const router = express.Router();
const { getAllFollowings,
        getAFollowing,
        createFollowing,
        deleteFollowing,
        getFollowers} = require('../db/queries/followingsQueries.js')

// // FOLLOWINGS
// GET api/followings (Gets all tags)
router.get('/', getAllFollowings);

// // GET api/followings/:id (Gets a specific following by id)
router.get('/:id', getAFollowing);

// // POST api/followings (Creates new tag)
router.post('/', createFollowing);

// //  DELETE api/following/:id (delete following)
router.delete('/:id', deleteFollowing);

//GET api/followings/users/:id
router.get('/users/:id',getFollowers )


module.exports = router;
