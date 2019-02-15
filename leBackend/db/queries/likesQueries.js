const db = require('./index.js')

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Likes',
        body: data
      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Likes'
      })
      next(err)
    });
};

const getALike = ( req, res, next ) => {
  let likeId = req.params.id;
  db.one('SELECT * FROM likes WHERE id=$1',likeId)
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
        message: 'Could not FIND Like with the id: ' + likeId
      })
      next(err)
    });
};

const createLike = (req, res, next ) => {
  db.none('INSERT INTO likes(user_id,post_id) VALUES(${user_id},${post_id})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Like has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE like'
        })
        next(err)
    })
};

const deleteLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id=$1', likeId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: 'Dumblr Like is gone....just like my will to live',
        });
    })
    .catch(err => {
      res.status(404)
        .json({
          status: 404,
          message: 'Looks like this Like is hard to destroy.. =-=',
        })
      next(err)
    });
}

const getLikesByPost = ( req, res, next ) => {
  let postId = req.params.id
  db.any('SELECT * FROM likes WHERE post_id=$1',postId)
    .then(data => {
      res.status(200).json({
        status:"Success",
        message: 'Got all tags in a Post',
        body:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Something Went wrong! Could not GET Likes in a post'
      })
     next(err)
    })
};


module.exports = {
  getAllLikes,
  getALike,
  createLike,
  deleteLike,
  getLikesByPost
}
