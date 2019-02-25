const db = require('./index.js');

const authHelpers = require("../../auth/helpers")

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Users',
        body: data

      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Users'
      })
      next(err)
    });
};

const getAUser = ( req, res, next ) => {
  let userId = req.params.id;
  db.one('SELECT * FROM users WHERE id=$1',userId)
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message:"We got'em, boys!",
          body: data
        })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not FIND the User with the user id: ' + userId
      })
      next(err)
    });
};

//
const updateUser = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  if (req.body.username && req.body.username.toLowerCase() === "null") {
    req.body.username = null;
  }
  if (req.body.password && req.body.password.toLowerCase() === "null") {
    req.body.password = null;
  }
  if (req.body.email && req.body.email.toLowerCase() === "null") {
    req.body.email = null;
  }
  if (req.body.bio && req.body.bio.toLowerCase() === "null") {
    req.body.bio = null;
  }
  if (req.body.pic_url && req.body.pic_url.toLowerCase() === "null") {
    req.body.pic_url = null;
  }
  db.none(
      "UPDATE users SET " + queryString + " WHERE id=" + req.params.id,
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "A Dumblr User has been UPDATED!"
      });
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not UPDATE the User'
      })
      next(err);
    });
};

const createUser = (req, res, next ) => {

  const hash = authHelpers.createHash(req.body.password);
  db.none('INSERT INTO users( username, password, email) VALUES(${username},${password}, ${email})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr User has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE user'
        })
        next(err)
    })
};



const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: 'Dumblr user is gone....just like my will to live',
        });
    })
    .catch(err => {
      res.status(404)
        .json({
          status: 404,
          message: 'Looks like this user is hard to destroy.. =-=',
        })
      next(err)
    });
}


module.exports = {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser
}
