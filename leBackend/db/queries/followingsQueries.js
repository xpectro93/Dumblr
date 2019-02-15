const db = require('./index.js');

const getAllFollowings = (req, res, next) => {
  db.any('SELECT * FROM followings')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Followings',
        body: data

      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Followings'
      })
      next(err)
    });
};

const getAFollowing = ( req, res, next ) => {
  let followId = req.params.id;
  db.one('SELECT * FROM followings WHERE id=$1',followId)
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
        message: 'Could not FIND the User with the user id: ' + followId
      })
      next(err)
    });
};


const createFollowing = (req, res, next ) => {
  db.none('INSERT INTO followings( user_id, follower_id) VALUES(${user_id},${follower_id})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Follower has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE following'
        })
        next(err)
    })
};



const deleteFollowing = (req, res, next) => {
  let followingId = parseInt(req.params.id);
  db.result('DELETE FROM followings WHERE id=$1', followingId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: 'Dumblr following is gone....just like my will to live',
        });
    })
    .catch(err => {
      res.status(404)
        .json({
          status: 404,
          message: 'Looks like this relationship is hard to destroy.. =-=',
        })
      next(err)
    });
}

const getFollowers = ( req, res, next ) => {
  let userId = req.params.id
  db.any('SELECT * FROM followings WHERE user_id=$1',userId)
    .then(data => {
      res.status(200).json({
        status:"Success",
        message: 'Got all follows by User id: ' + userId,
        body:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Something Went wrong! Could not GET followers by User id'
      })
     next(err)
    })
};


module.exports = {
  getAllFollowings,
  getAFollowing,
  createFollowing,
  deleteFollowing,
  getFollowers

}
