var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');

const session = require("express-session")
const passport = require("./auth/local")


//ADD routes imports here =^-^=
let index = require('./routes/index');
let users = require('./routes/users');
let posts = require('./routes/posts');
let tags = require('./routes/tags');
let likes = require('./routes/likes');
let followings = require('./routes/followings');
let blogs = require('./routes/blogs')
let sess = require('./routes/session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("This is a secret"));

app.use(
  session({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client/build")));


///ADD Routes here =^-^=
app.use('/api/', index);
app.use('/api/blogs', blogs);
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/tags', tags);
app.use('/api/likes', likes);
app.use('/api/followings', followings);
app.use('/api/session', sess)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../leFrontend/build/index.html"));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
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
