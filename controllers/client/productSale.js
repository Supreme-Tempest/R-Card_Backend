const Facture = require('../../models/client/facture');
const Product = require('../../models/product/product');
const ProductSale = require('../../models/client/productSale')
const { literal } = require("sequelize");
const pool = require('../../services/initService').pool;


const getAll = (req, res) => {
    console.log('facture product: ', req.body);
    try {
        ProductSale.findAll()
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('facture product: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getAllSum = (req, res) => {
    console.log('productSum: ', req.body);
    try {
        let updateLastLogin = `Select SUM(p.price * p.stock) as total,
                                count(p.id) as products 
                                from products as p`;

        pool.query(updateLastLogin, (err, results) => {
            console.log("result", results.rows);
            if (results) {
                return res.status(200).json({
                    success: true,
                    data: results.rows,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: e,
                });
            }
        })
    } catch (err) {
        console.log('product: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getByFacture = (facture, req, res) => {
    console.log('product sale by facture: ', req.body);
    try {
        ProductSale.findAll({
            where: { facture_id: facture }, 
            //include: Department,
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('product sale by type: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};



const getByProduct = (product, req, res) => {
    console.log('product sale by prodcut: ', req.body);
    try {
        ProductSale.findAll({
            where: { product_id: product }, 
            //include: Department,
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('product sale by product: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};


const save = (item, req, res) => {
    console.log('product sale save: ', item);
    try {
        ProductSale.create(item)
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('poduct sale save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, req, res) => {
    console.log('product sale update: ', item);
    try {
        ProductSale.update(item, { where: { id: item.id}})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            console.log("error", e);
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('prodcuta sale update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    //getAllSum: getAllSum,
    //getByClient: getByClient,
    getByFacture: getByFacture,
    getByProduct: getByProduct,
    save: save,
    update: update,  
};