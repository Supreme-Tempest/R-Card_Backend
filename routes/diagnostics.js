var express = require('express');
var router = express.Router();
const diagnostics = require('../controllers/diagnostic/diagnostics');

router.get('/factures', (req, res, next) => {
    diagnostics.getFactures(req, res);
});

router.get('/products', (req, res, next) => {
    diagnostics.getProducts(req, res);
});

router.get('/productSalesDesc', (req, res, next) => {
    diagnostics.getProductSales(req, res);
});

router.get('/productSalesAsc', (req, res, next) => {
    diagnostics.getProductSales(req, res, true);
});

module.exports = router;