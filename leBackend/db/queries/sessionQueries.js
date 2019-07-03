const db = require('./index.js');
const authHelpers = require("../../auth/helpers");

const createUser =(req, res, next)=> {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (username, password, email) VALUES (${username}, ${password}, ${email})",
    { username: req.body.username, password: hash, email:req.body.email}
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

const  logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res)=> {
    console.log("LOGINUSER ",req.user);
  res.json(req.user);
}

const isLoggedIn = (req, res) => {
  console.log("this is req.user on Isloggedin ", req.user);
  if (req.user) {

    res.json({ id: req.user });
  } else {
    res.json({ id: null });
  }
}

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
