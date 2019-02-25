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
  res.json(req.user);
}

const isLoggedIn = (req, res) => {
  
  if (req.user) {
    res.json({ username: req.user});
  } else {
    res.json({ username: null });
  }
}

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
