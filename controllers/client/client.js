const client = require('../../models/client/client');

const transform = (records) => {
    return records.map((record) => {
        return {
            card: record.number_card,
            dui: record.dui,
            name: record.name,
            contratation:  record.creation_date,
            birthday: record.birthday,
            state: record.state,
        }
    });
}

const getAll = (req, res) => {
    console.log('client: ', req.body);
    try {
        client.findAndCountAll()
        .then((result)=>{
            //console.log(transform(result.rows));
            return res.status(200).send(transform(result.rows));
        })
        .catch((e)=>{
            console.log("F. client");
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('client: ', err.message);
        return res.status(500).send(err);
    }
};

const save = (item, req, res) => {
    console.log('client save: ', req.body);
    try {
        client.create(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('client save: ', err.message);
        return res.status(500).send(err);
    }
};

const update = (item, req, res) => {
    console.log('client update: ', req.body);
    try {
        client.update(item)
        .then((result)=>{
            //const data = results.dataValues;
            return res.status(200).send(result);
        })
        .catch((e)=>{
            return res.status(400).send(e);
        })  ;
    } catch (err) {
        console.log('client update: ', err.message);
        return res.status(500).send(err);
    }
};

module.exports = {
    getAll: getAll,
    save: save,
    update: update,  
};