const product = require('../../models/product/identificative');

const getAll = (req, res) => {
    console.log('product_identificative: ', req.body);
    try {
        product.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product_identificative: ', err.message);
        return res.status(500).send(err);
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
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product by type: ', err.message);
        return res.status(500).send(err);
    }
};


const save = (item, req, res) => {
    console.log('product_identificative save: ', req.body);
    try {
        product.save(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product_identificative save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('product_identificative update: ', req.body);
    try {
        product.update(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product_identificative update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    getByType: getByType,
    save: save,
    update: update,  
};