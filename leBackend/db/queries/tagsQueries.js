const db = require('./index.js')

const getAllTags = (req, res, next) => {
  db.any('SELECT * FROM tags')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Tags',
        body: data
      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Tags'
      })
      next(err)
    });
};

const getATag = ( req, res, next ) => {
  let tagId = req.params.id;
  db.one('SELECT * FROM tags WHERE id=$1',tagId)
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
        message: 'Could not FIND the User with the tag id: ' + tagId
      })
      next(err)
    });
};

const createTag = (req, res, next ) => {
  db.none('INSERT INTO tags(name) VALUES(${name})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Tag has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE tag'
        })
        next(err)
    })
};

const getTagsByPost = ( req, res, next ) => {
  let postId = req.params.id
  db.any('SELECT * FROM post_tags WHERE post_id=$1',postId)
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
        message:'Something Went wrong! Could not GET tags in a post'
      })
     next(err)
    })
};


module.exports = {
  getAllTags,
  getATag,
  createTag,
  getTagsByPost
}
