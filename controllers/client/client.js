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
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e.errors
            });
        });
    } catch (err) {
        console.log('client: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const save = (item, req, res) => {
    console.log('client save: ', item);
    try {
        client.create(item)
        .then((result)=>{
            //console.log("funca", result);
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            console.log("error", e.errors);
            return res.status(400).json({
                success: false,
                error: e.errors,
            });
        });
    } catch (err) {
        console.log('client save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, req, res) => {
    console.log('client update: ', item);
    try {
        client.update(item, {where: { number_card: item.number_card }})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e.errors,
            });
        });
    } catch (err) {
        console.log('client update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const updateStatus = (item, req, res) => {
    console.log('client update: ', item);
    try {
        client.update({ state: item.state}, {where: { number_card: item.card }})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e.errors
            });
        });
    } catch (err) {
        console.log('client update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    save: save,
    update: update,  
    updateStatus: updateStatus,
};