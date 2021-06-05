var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tempest' });
 /* res.send(
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
  );*/
});

router.get('/user', function(req, res, next) {
  res.send(
    {
      data: {
        user: 'my_user',
        title: 'main page',
        size: 99,
      },
      meta: {
        size: 99,
        page: 99,
      },
    }
  );
});

module.exports = router;
