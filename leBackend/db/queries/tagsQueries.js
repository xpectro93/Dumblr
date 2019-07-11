const db = require('./index.js')

const getAllTags = (req, res, next) => {
  db.any('SELECT * from tags')
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
  let tagName = req.params.id;
  db.any('SELECT * FROM tags WHERE name=$1',tagName)
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
        message: 'Could not FIND the Tag with the tag id: ' + tagName,
        error:err
      })
      next(err)
    });
};

const createTag = (req, res, next ) => {


    db.one('INSERT INTO tags(name) VALUES(${name}) RETURNING id', req.body)
    .then((data)=> {
        console.log(data.id)
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Tag has been CREATED!",
          id:data.id
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
}
const createPostTag = (req, res, next ) => {
  db.none('INSERT INTO post_tags(tag_id,post_id) VALUES(${tag_id},${post_id})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Tag and post have been linked"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! creating the tag pair'
        })
        next(err)
    })
};

const getTagsByPost = ( req, res, next ) => {
  let postId = req.params.id
  db.any(`SELECT * FROM tags JOIN post_tags ON post_tags.tag_id = tags.id AND post_id = $1`, postId)
  // db.any('SELECT * FROM post_tags WHERE post_id=$1',postId)
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
const getAllTagPostLinks = ( req,res,next ) => {
  let tagId = req.params.id;
  db.any('SELECT * FROM posts JOIN post_tags ON posts.id = post_tags.post_id WHERE post_tags.tag_id = $1',tagId)
    .then(data => {
      res.status(200).json({
        status:'Success',
        message:"Got All Tag Posts Links",
        body:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: "Mission Failed",
        error:err
      })
      next(err)
    })
}
//similar to get all tags but it also gets the id of the posts in which they are linked to.
const getAllTagsOfPost = (req, res, next) => {
  db.any('SELECT  post_id, name, tag_id FROM tags JOIN post_tags ON post_tags.tag_id = tags.id')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Tags of posts',
        body: data
      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Tags of posts'
      })
      next(err)
    });
};


module.exports = {
  getAllTags,
  getATag,
  createTag,
  getTagsByPost,
  getAllTagsOfPost,
  createPostTag,
  getAllTagPostLinks
}
