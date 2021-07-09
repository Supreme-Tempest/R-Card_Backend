const ClientModel = require('../../models/client/client');
const paginate = require('../tools/pagination');

async function listClient(req, res) {
    try {
        // get the query params
        const { page, size, filter } = req.body;
        let search = {};

        // add the search term to the search object
        search = {
            where: {
                ...filter
            },
            order: [
                ['number_card', 'ASC'],
            ],
        };

        // transform function that can be passed to the  paginate method
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

        console.log("preview to clientpag");
        // paginate method that takes in the model, page, limit, search object, order and transform
        const clients = await paginate(ClientModel, page, size, search, transform, res)
        console.log("clients: ", clients);
        return res.status(200).send({
            success: true,
            message: 'Fetched clients',
            data: clients
        })
    } catch (error) {
        console.log('Failed to fetch clients', error);
        return res.status(500).send({
            success: false,
            message: 'Failed to fetch clients'
        })
    }
}

module.exports = {
    listClient: listClient,
};