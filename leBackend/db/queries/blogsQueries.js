const db = require('./index.js');

const getAllBlogs = (req, res, next) => {
  db.any('SELECT * FROM blogs')
    .then(data => {
      res.status(200).json({
        status: 'Success',
        message: 'Got all Blogs',
        body: data

      })
    })
    .catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Could not RETRIEVE Blogs'
      })
      next(err)
    });
};

const getABlog = ( req, res, next ) => {
  let blogId = req.params.id;
  db.one('SELECT * FROM blogs WHERE id=$1',blogId)
    .then(data => {
      res.status(200)
        .json({
          status: "Success",
          message:"Got the Blog",
          body: data
        })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not FIND the Blog with the id: ' + blogId
      })
      next(err)
    });
};

//
const updateBlog = (req, res, next) => {
  db.none("UPDATE blogs SET title = ${title} WHERE id = ${id}", {
    id: Number(req.params.id),
    title:req.body.title
  })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "A Dumblr Blog has been UPDATED!"
      });
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not UPDATE Blog'
      })
      next(err);
    });
};


const createBlog = (req, res, next ) => {
  db.none('INSERT INTO blogs( user_id, title) VALUES(${user_id},${title})', req.body)
    .then(()=> {
      res.status(200)
        .json({
          status:"Success",
          message:"New Dumblr Blog has been CREATED!"
        })
    })
    .catch(err => {
      res.status(404)
        .json({
          status:404,
          message:'Something Went wrong! Could not CREATE Blog'
        })
        next(err)
    })
};

const deleteBlog = (req, res, next) => {
  let blogId = parseInt(req.params.id);
  db.result('DELETE FROM blogs WHERE id=$1', blogId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: 'Dumblr blog is gone....just like my will to live',
        });
    })
    .catch(err => {
      res.status(404)
        .json({
          status: 404,
          message: 'Looks like this Blog is hard to destroy..like aids...or my dark sense of humor =_=',
        })
      next(err)
    });
}


module.exports = {
  getAllBlogs,
  getABlog,
  createBlog,
  updateBlog,
  deleteBlog
}
