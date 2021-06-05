var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send({user: 'my_user', title: 'main page'});
});

module.exports = router;
