const workshop = require('../../models/workshop/workshop');

const transform = (records) => {
    return records.map((record) => {
        return {
            id: record.id,
            name: record.name,
            municipio: record.municipio,
        }
    });
}

const getAll = (req, res) => {
    console.log('workshop: ', req.body);
    try {
        workshop.findAll({
            include: [
                { model: Municipio, as: 'municipio'},
            ],
            order: [
                ['id', 'ASC'],
            ],
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: transform(result),
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('workshop: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getByMunicipio = (municipio, req, res) => {
    console.log('workshop by municipio: ', req.body);
    try {
        workshop.findAll({
            where: { municipio_id: municipio }, 
            include: [
                { model: Municipio, as: 'municipio'},
            ],
            order: [
                ['id', 'ASC'],
            ],
        })
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('workshops by municipio: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};


const save = (item, req, res) => {
    console.log('workshop save: ', item);
    try {
        workshop.create(item)
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('workshops save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, req, res) => {
    console.log('workshop update: ', item);
    try {
        workshop.update(item, { where: { id: item.id}})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('workshops update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    getByMunicipio: getByMunicipio,
    save: save,
    update: update,  
};