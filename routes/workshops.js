var express = require('express');
var router = express.Router();
const department = require('../controllers/workshop/departmentController');

/* GET users listing. */
router.get('/departments', function(req, res, next) {
    department.deparmentGetAll(req, res);
});

module.exports = router;
