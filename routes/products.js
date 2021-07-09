var express = require('express');
var router = express.Router();
const product = require('../controllers/product/product');
const type = require('../controllers/product/productType');
const identificatice = require('../controllers/product/identificative');
const productsPaginate = require('../controllers/product/listproduct');
const IdentificativeType = require('../controllers/product/identificativeType');

router.get('/product', function(req, res, next) {
    product.getAll(req, res);
});

router.get('/productsPaginate', function(req, res, next) {
    console.log("requiere", req.body);
    productsPaginate.listProduct(req, res);
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
        type_id: req.body.productType,
        identificative_id: req.body.identificative,
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
        type_id: req.body.productType,
        identificative_id: req.body.identificative,
    }
    product.update(data, req, res);
});

router.get('/type', function(req, res, next) {
    type.getAll(req, res);
});

router.get('/type/:type', function(req, res, next) {
    type.getByType(req.params.type, req, res);
});

router.post('/type', function(req, res, next) {
    data = {
        name: req.body.name,
        type_id: req.body.identificativeType
    }
    type.save(data, req, res);
});

router.put('/type', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
        type_id: req.body.identificativeType
    }
    type.update(data, req, res);
});


router.get('/identificative', function(req, res, next) {
    if (req.body.type) {
        console.log('aqui prrro');
        identificatice.getByType(req.body.type,req, res);
    }
    identificatice.getAll(req, res);
});

router.post('/identificative', function(req, res, next) {
    data = {
        name: req.body.name,
        type_id: req.body.productType,
    }
    identificatice.save(data, req, res);
});

router.put('/identificative', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
        type_id: req.body.productType,
    }
    identificatice.update(data, req, res);
});

router.get('/identificative_type', function(req, res, next) {
    IdentificativeType.getAll(req, res);
});

router.post('/identificative_type', function(req, res, next) {
    data = {
        name: req.body.name,
    }
    IdentificativeType.save(data, req, res);
});

router.put('/identificative_type', function(req, res, next) {
    data = {
        id: req.body.id,
        name: req.body.name,
    }
    IdentificativeType.update(data, req, res);
});

module.exports = router;
