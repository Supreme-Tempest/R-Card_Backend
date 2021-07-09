const product = require('../../models/product/productType');

const getAll = (req, res) => {
    console.log('product_type: ', req.body);
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
        console.log('product_type: ', err.message);
        return res.status(500).send(err);
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
    console.log('product_type save: ', item);
    try {
        product.create(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product_type save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('product_type update: ', item);
    try {
        product.update(item, { where: { id: item.id}})
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('product_type update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    getByType: getByType,
    save: save,
    update: update,  
};