var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(res) {
  res.render('index', { title: 'Expresss' });
});

module.exports = router;
