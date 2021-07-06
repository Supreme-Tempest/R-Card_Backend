var express = require('express');
var router = express.Router();
const client = require('../controllers/client/client');

router.get('/clients', function(req, res, next) {
    client.getAll(req, res);
});

router.post('/clients', function(req, res, next) {
    data = {
        number_card: req.body.number_card,
        dui: req.body.dui,
        name: req.body.name,
        creation_date: new Date(),
        birthday: req.body.birthday,
        state: true,
    }
    client.save(data, req, res);
});

router.put('/clients', function(req, res, next) {
    data = {
        number_card: req.body.number_card,
        dui: req.body.dui,
        name: req.body.name,
        state: true,
    }
    client.update(data, req, res);
    });

module.exports = router;
