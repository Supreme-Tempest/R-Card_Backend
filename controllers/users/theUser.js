const User = require('../../models/users/user');

const transform = (records) => {
    return records.map((record) => {
        return {
            username: record.role,
            name: record.name,
            lastname:  record.lastname,
            role: record.role,
            workshop: record.workshop,
            active: record.active,
            lastlogin: record.lastlogin,
        }
    });
}

const getAll = (req, res) => {
    console.log('user: ', req.body);
    try {
        role.findAll({
            include: [
                { model: Role, as: 'role'},
                { model: Workshop, as: 'workshop'}
            ],
        })
        .then((result)=>{
            //const data = results.dataValues;
            //console.log(result);
            return res.status(200).send(transform(result));
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('role: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, req, res) => {
    console.log('role save: ', req.body);
    try {
        role.create(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('role save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('role update: ', req.body);
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
        console.log('role update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    save: save,
    update: update,  
};