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
        message: 'Could not FIND the Post with the id: ' + postId
      })
      next(err)
    });
};
const getAllPostById = ( req, res, next ) => {
  let userId = req.user
  db.any('SELECT * FROM posts WHERE user_id=$1 ORDER BY publish_date desc',userId)
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


const updatePost = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");

  if (req.body.type && req.body.type.toLowerCase() === "null") {
    req.body.type = null;
  }
  if (req.body.title && req.body.title.toLowerCase() === "null") {
    req.body.title = null;
  }
  if (req.body.description && req.body.description.toLowerCase() === "null") {
    req.body.description = null;
  }
  if (req.body.post && req.body.post.toLowerCase() === "null") {
    req.body.post = null;
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
  let tagId;
  db.one('INSERT INTO posts(user_id, type, title, description, post) VALUES(${user_id}, ${type},${title}, ${description}, ${post}) RETURNING id', req.body)
    .then( data => {
          res.status(200)
            .json({
              status:"Success",
              message:"New Post Created",
              id:data.id
            })}
          ).catch(err => next(err))
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

const getPostsByFollowing = ( req, res, next ) => {

  let userId = req.user
  // let userId = req.params.id
  db.any("SELECT posts.*, users.pic_url, bio , username FROM posts JOIN users ON posts.user_id = users.id JOIN followings ON users.id = followings.user_id AND follower_id = $1 ORDER BY publish_date desc", userId)
  // db.any("SELECT posts.* FROM posts JOIN followings ON posts.user_id = followings.user_id AND follower_id =$1", userId)
    .then(data => {
      if(data.length<1){
        res.status(200).json({
          status:200,
          message:"Theres nuthin' hea"
        })
      }
      res.status(200).json({
        status:"Success",
        message: 'Got all Posts by follower id: ' + userId,
        body:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Something Went wrong! Could not GET posts by followee id'
      })
     next(err)
    })
};

// const getAllPostsByTagsName = (req, res, next) => {
//     let params = req.params.tag
//     db.any("SELECT POST_ID,  POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL, array_agg(TAG_NAME) FROM POSTS JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE TAG_NAME LIKE ${params} GROUP BY POST_ID, POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL", {
//       params: "%" + req.params.tag + "%"
//     }).then((data) => {
//       res.status(200).json({
//         status: 200,
//         message: "Complete",
//         data: data,
//         request: req.params.tag
//       })
//     }).catch(err => {
//       res.json({
//         status: 404,
//         STATUS: "FAIL",
//         error: err.message
//       })
//     })
//   }


module.exports = {
  getAllPosts,
  getAPost,
  createPost,
  updatePost,
  deletePost,
  getPostsByTag,
  getPostsByFollowing,
  getAllPostById
}
