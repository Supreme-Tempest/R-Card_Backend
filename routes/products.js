var express = require('express');
var router = express.Router();
const product = require('../controllers/product/product');
const type = require('../controllers/product/productType');
const identificatice = require('../controllers/product/identificative');

router.get('/product', function(req, res, next) {
    product.getAll(req, res);
});

router.get('/product/:product_type', function(req, res, next) {
    product.getByType(req.params.product_type, req, res);
});

router.post('/product', function(req, res, next) {
    data = {
        name: req.body.name,
        brand: req.body.brand,
        stock: req.body.stock,
        price: req.body.price,
        productType: req.body.productType,
    }
    product.save(data, req, res);
});

router.put('/product', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
        brand: req.body.brand,
        stock: req.body.stock,
        price: req.body.price,
        productType: req.body.productType,
    }
    product.update(data, req, res);
});

router.get('/type', function(req, res, next) {
    type.getAll(req, res);
});

router.post('/type', function(req, res, next) {
    data = {
        name: req.body.name,
    }
    type.save(data, req, res);
});

router.put('/type', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
    }
    type.update(data, req, res);
});


router.get('/identificative', function(req, res, next) {
    identificatice.getAll(req, res);
});

router.post('/identificative', function(req, res, next) {
    data = {
        name: req.body.name,
        productType: req.body.productType,
    }
    identificatice.save(data, req, res);
});

router.put('/identificative', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
        productType: req.body.productType,
    }
    identificatice.update(data, req, res);
});

module.exports = router;