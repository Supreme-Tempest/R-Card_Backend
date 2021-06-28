const municipio = require('../../models/municipio');
const Department = require('../../models/department');


const municipioGetAll = (req, res) => {
    console.log('municipios: ', req.body);
    try {
        municipio.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('municipios: ', err.message);
        return res.status(500).send(err);
    }
};

const municipioGetByDepartment = (department, req, res) => {
    console.log('municipios by department: ', req.body);
    try {
        municipio.findAll({
            //where: { department: department }, 
            include: Department,
        })
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('municipios: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    municipioGetAll: municipioGetAll,
    municipioGetByDepartment: municipioGetByDepartment,
};