const express = require('express');
const router = express.Router();
const { getAllUsers,
        getAUser,
        createUser,
        updateUser,
        deleteUser } = require('../db/queries/usersQueries.js')


// USERS
// // GET api/users (Gets all users)
router.get('/', getAllUsers);

// // GET api/users/:id (Gets a specific user by id)
router.get('/:id', getAUser);

// // PATCH api/users/:id (Allows the update of a users profile)
router.patch('/:id', updateUser);

// // POST api/users (Creates new user)
router.post('/', createUser);

// // DELETE api/users/:id (Allows the user to delete their account)
router.delete('/:id', deleteUser);


module.exports = router;
