var express = require('express');
var router = express.Router();

/* GET users listing. */
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
