var express = require('express');
var router = express.Router();
const department = require('../controllers/workshop/department');
const municipio = require('../controllers/workshop/municipio');
const workshop = require('../controllers/workshop/workshop');

/* GET users listing. */
router.get('/departments', function(req, res, next) {
    department.getAll(req, res);
});

router.get('/municipios', function(req, res, next) {
    municipio.getAll(req, res);
});

router.get('/municipios/:department', function(req, res, next) {
    municipio.getByDepartment(req.params.department, req, res);
});

router.get('/workshop', function(req, res, next) {
    console.log('workshop get');
    workshop.getAll(req, res);
});

router.get('/workshop/:municipio', function(req, res, next) {
    workshop.getByMunicipio(req.params.municipio, req, res);
});

router.post('/workshop', function(req, res, next) {
    data = {
        name: req.body.name,
        municipio: req.body.municipio,
    }
    workshop.save(data, req, res);
});

router.put('/workshop', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
        municipio: req.body.municipio,
    }
    workshop.update(data, req, res);
});

module.exports = router;
