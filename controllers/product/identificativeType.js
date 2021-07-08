const IdentificativeType = require('../../models/product/identificativeType');

const getAll = (req, res) => {
    console.log('identificative_type: ', req.body);
    try {
        IdentificativeType.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('identificative_type: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, req, res) => {
    console.log('identificative_type save: ', item);
    try {
        IdentificativeType.create(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('identificative_type save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('identificative_type update: ', item);
    try {
        IdentificativeType.update(item, { where: { id: item.id}})
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('identificative_type update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    save: save,
    update: update,  
};