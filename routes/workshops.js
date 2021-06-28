var express = require('express');
var router = express.Router();
const department = require('../controllers/workshop/departmentController');
const municipio = require('../controllers/workshop/municipioController');

/* GET users listing. */
router.get('/departments', function(req, res, next) {
    department.deparmentGetAll(req, res);
});

router.get('/municipios', function(req, res, next) {
    municipio.municipioGetAll(req, res);
});

router.get('/municipios/:department', function(req, res, next) {
    municipio.municipioGetByDepartment(req.params.department, req, res);
});

module.exports = router;
