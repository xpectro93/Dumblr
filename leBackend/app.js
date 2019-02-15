var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//ADD routes imports here =^-^=
let index = require('./routes/index');
let users = require('./routes/users');
let posts = require('./routes/posts');
let tags = require('./routes/tags');
let likes = require('./routes/likes');
let followings = require('./routes/followings');
let blogs = require('./routes/blogs')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




///ADD Routes here =^-^=
app.use('/', index);
app.use('/blogs',blogs);
app.use('/users', users);
app.use('/posts', posts);
app.use('/tags', tags);
app.use('/likes',likes);
app.use('/followings',followings);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
