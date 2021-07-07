const department = require('../../models/workshop/department');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
        }
    });
}

const getAll = (req, res) => {
    console.log('departments: ', req.body);
    try {
        department.findAll()
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(transform(result));
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
    getAll: getAll,
};