import ClientModel from '../../models/client/client';

export const listClient = async(req, res) => {
    try {
        // get the query params
        const { page, limit, filter } = req.query;
        let search = {};

        // add the search term to the search object
        if (filter) {
            search = {
                where: {
                    state: filter.state
                }
            };
        }

        // transform function that can be passed to the  paginate method
        const transform = (records) => {
            return records.map((record) => {
                return {
                    card: record.number_card,
                    dui: record.dui,
                    name: record.name,
                    contratation:  moment(record.creation_date).format('D-M-Y H:mm A'),
                    birthday: moment(record.birthday).format('D-M-Y H:mm A'),
                    state: record.state,
                }
            });
        }

        // paginate method that takes in the model, page, limit, search object, order and transform
        const clients = await paginate(ClientModel, page, limit, search, transform);

        return res.status(200).send({
            success: true,
            message: 'Fetched clients',
            data: products
        })
    } catch (error) {
        console.log('Failed to fetch clients', error);
        return res.status(500).send({
            success: false,
            message: 'Failed to fetch clients'
        })
    }
}