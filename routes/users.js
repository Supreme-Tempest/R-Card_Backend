var express = require('express');
var router = express.Router();
const role = require('../controllers/users/roles');
const user = require('../controllers/users/users');
const userssPaginate = require('../controllers/users/listUser');

router.get('/users', function(req, res, next) {
  user.getAll(req, res);
});

router.get('/usersPaginate', function(req, res, next) {
  console.log("Si se pudo stark :'v")
  //console.log("requiere", req.body);
  userssPaginate.listUser(req, res);
});

router.post('/users', function(req, res, next) {
  data = {
      name: req.body.name,
  }
  user.save(data, req, res);
});

router.put('/users', function(req, res, next) {
  data = {
      id: req.body.id,
      name: req.body.name,
  }
  user.update(data, req, res);
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
