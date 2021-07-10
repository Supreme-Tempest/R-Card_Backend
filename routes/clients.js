var express = require('express');
var router = express.Router();
const client = require('../controllers/client/client');
const facture = require('../controllers/client/facture');
const productSale = require('../controllers/client/productSale');
const clientPage = require('../controllers/client/listclient');

router.get('/clients', function(req, res, next) {
    client.getAll(req, res);
});

router.get('/clientsPaginate', function(req, res, next) {
    console.log("requiere", req.body);
    clientPage.listClient(req, res);
});

router.post('/clients', function(req, res, next) {
    data = {
        number_card: req.body.number_card,
        dui: req.body.dui,
        name: req.body.name,
        birthday: req.body.birthday,
        creation_date: new Date(),
        state: true,
    }
    console.log(data);
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

router.put('/clientState', function(req, res, next) {
    data = {
        card: req.body.card,
        state: req.body.state,
    }
    client.updateStatus(data, req, res);
});

router.get('/facture', function(req, res, next) {
    if (req.body.client) {
        facture.getByClient(req.body.client, req, res);
    } else {
        facture.getAll(req, res);
    }
});

router.post('/facture', function(req, res, next) {
    //console.log(data);
    facture.save(req, res);
});

router.put('/facture', function(req, res, next) {
    data = {
        id: req.body.id,
        client_id: req.body.client,
        total: req.body.total,
    }
    factue.update(data, req, res);
});

router.get('/factureProduct', function(req, res, next) {
    if (req.body.facture) {
        productSale.getByFacture(req.body.facture, req, res);
    } else if(req.body.product) {
        productSale.getByProduct(req.body.product, req, res);
    } else {
        productSale.getAll(req, res);
    }
});

router.post('/factureProduct', function(req, res, next) {
    data = {
        facture_id: req.body.facture,
        product_id: req.body.product,
        amount: req.body.amount,
        total: req.body.total,
    }
    console.log(data);
    productSale.save(data, req, res);
});

router.put('/factureProduct', function(req, res, next) {
    data = {
        id: req.body.id,
        facture_id: req.body.facture,
        product_id: req.body.product,
        amount: req.body.amount,
        total: req.body.total,
    }
    productSale.update(data, req, res);
});

module.exports = router;
