const product = require('../../models/product/product');

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

const getByType = (type, req, res) => {
    console.log('product by type: ', req.body);
    try {
        product.findAll({
            where: { productType: type }, 
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
    console.log('product save: ', req.body);
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
    console.log('product update: ', req.body);
    try {
        product.update(item)
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
        console.log('product update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getByType: getByType,
    save: save,
    update: update,  
};