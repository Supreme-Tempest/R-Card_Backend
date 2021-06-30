const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const department = require('../../models/department');
const Municipio = require('../../models/municipio');


const deparmentGetAll = (req, res) => {
    console.log('departments: ', req.body);
    try {
        department.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('department: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    deparmentGetAll: deparmentGetAll,
};