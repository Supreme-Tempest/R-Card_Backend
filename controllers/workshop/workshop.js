const workshop = require('../../models/wokshop/workshop');

const getAll = (req, res) => {
    console.log('workshop: ', req.body);
    try {
        workshop.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('workshop: ', err.message);
        return res.status(500).send(err);
    }
};

const getByMunicipio = (municipio, req, res) => {
    console.log('workshop by municipio: ', req.body);
    try {
        workshop.findAll({
            where: { municipio: municipio }, 
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
        console.log('workshops by municipio: ', err.message);
        return res.status(500).send(err);
    }
};


const save = (item, req, res) => {
    console.log('workshop save: ', req.body);
    try {
        workshop.save(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('workshops save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('workshop update: ', req.body);
    try {
        workshop.update(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('workshops update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    getByMunicipio: getByMunicipio,
    save: save,
    update: update,  
};