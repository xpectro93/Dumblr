const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const db = require("../db/queries/index.js")

passport.use(
  new LocalStrategy((username, password, done) => {
    // console.log("IN PASSPORT username:",username, " and "," pass: ",password);


    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        // console.log("THIS IS THEN IN PASS AS USER: ",user.id);
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
