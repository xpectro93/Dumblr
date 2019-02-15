const db = require('./index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Posts',
        body: data

      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Posts'
      })
      next(err)
    });
};

const getAPost = ( req, res, next ) => {
  let postId = req.params.id;
  db.one('SELECT * FROM posts WHERE id=$1',postId)
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
        message: 'Could not FIND the Post with the id: ' + userId
      })
      next(err)
    });
};

//
const updatePost = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  if (req.body.title && req.body.title.toLowerCase() === "null") {
    req.body.title = null;
  }
  if (req.body.body && req.body.body.toLowerCase() === "null") {
    req.body.body = null;
  }
  if (req.body.link_title && req.body.link_title.toLowerCase() === "null") {
    req.body.link_title = null;
  }
  if (req.body.link_url && req.body.link_url.toLowerCase() === "null") {
    req.body.link_url = null;
  }
  if (req.body.url && req.body.url.toLowerCase() === "null") {
    req.body.url = null;
  }
  db.none(
      "UPDATE posts SET " + queryString + " WHERE id=" + req.params.id,
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "A Dumblr Post has been UPDATED!"
      });
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not UPDATE the Post'
      })
      next(err);
    });
};

const createPost = (req, res, next ) => {
  db.none('INSERT INTO posts( blog_id, user_id, title, body, link_title, link_url, url) VALUES(${blog_id},${user_id}, ${title}, ${body}, ${link_title},${link_url},${url})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Post has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE Post'
        })
        next(err)
    })
};



const deletePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', userId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: 'Dumblr Post is gone....just like my will to live',
        });
    })
    .catch(err => {
      res.status(404)
        .json({
          status: 404,
          message: 'Looks like this Post is hard to destroy.. =-=',
        })
      next(err)
    });
}

const getPostsByTag = ( req, res, next ) => {
  let tagId = req.params.id
  db.any('SELECT * FROM post_tags WHERE tag_id=$1',tagId)
    .then(data => {
      res.status(200).json({
        status:"Success",
        message: 'Got all Posts in a Tags',
        body:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Something Went wrong! Could not GET posts by Tag id'
      })
     next(err)
    })
};


module.exports = {
  getAllPosts,
  getAPost,
  createPost,
  updatePost,
  deletePost,
  getPostsByTag
}
