var express = require('express');
var router = express.Router();
const role = require('../controllers/users/roles');

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

router.get('/roles', function(req, res, next) {
  role.getAll(req, res);
});


router.post('/roles', function(req, res, next) {
  data = {
      name: req.body.name,
  }
  role.save(data, req, res);
});

router.put('/roles', function(req, res, next) {
  data = {
      id: req.body.id,
      name: req.body.name,
  }
  role.update(data, req, res);
});

module.exports = router;
