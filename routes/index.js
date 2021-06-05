var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(
    {
      data: {
        user: 'my_user',
        title: 'main page',
        size: 23,
      },
      meta: {
        size: 23,
        page: 32,
      },
    }
  );
});

module.exports = router;
