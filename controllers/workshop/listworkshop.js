const Workshop = require('../../models/workshop/workshop');
const Municipio = require('../../models/workshop/municipio');
const paginate = require('../tools/pagination');

async function listWorkshop(req, res) {
    try {
        // get the query params
        const { page, size, filter } = req.body;
        let search = {};

        // add the search term to the search object
        search = {
            where: {
                ...filter
            },
            include: [
                { model: Municipio, as: 'municipio'},
            ],
            order: [
                ['id', 'ASC'],
            ],
        };
        
        // transform function that can be passed to the  paginate method
        const transform = (records) => {
            return records.map((record) => {
                return {
                    id: record.id,
                    name: record.name,
                    municipio:  record.municipio,
                }
            });
        }

        console.log("preview to workshop");
        // paginate method that takes in the model, page, limit, search object, order and transform
        const result = await paginate(Workshop, page, size, search, transform, res)
        console.log("workshops: ", result);
        return res.status(200).send({
            success: true,
            message: 'Fetched workshop',
            data: result
        })
    } catch (error) {
        console.log('Failed to fetch workshop', error);
        return res.status(500).send({
            success: false,
            message: 'Failed to fetch workshop'
        })
    }
}

module.exports = {
    listWorkshop: listWorkshop,
};