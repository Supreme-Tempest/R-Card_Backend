const product = require('../../models/product/product');
const { literal } = require("sequelize");
const pool = require('../../services/initService').pool;


const getAll = (req, res) => {
    console.log('product: ', req.body);
    try {
        product.findAll()
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
        console.log('product: ', err.message);
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

const getByType = (type, req, res) => {
    console.log('product by type: ', req.body);
    try {
        product.findAll({
            where: { type_id: type }, 
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
        console.log('product by type: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};


const save = (item, req, res) => {
    console.log('product save: ', item);
    try {
        product.create(item)
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
        console.log('product save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, req, res) => {
    console.log('product update: ', item);
    try {
        product.update(item, { where: { id: item.id}})
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
        console.log('product update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getAllSum: getAllSum,
    getByType: getByType,
    save: save,
    update: update,  
};