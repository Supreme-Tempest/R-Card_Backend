const product = require('../../models/product/product');
const paginate = require('../tools/pagination');

async function listProduct(req, res) {
    try {
        // get the query params
        const { page, size, filter } = req.body;
        let search = {};

        // add the search term to the search object
        if (filter) {
            search = {
                where: {
                    ...filter
                }
            };
        }

        // transform function that can be passed to the  paginate method
        const transform = (records) => {
            return records.map((record) => {
                return {
                    id: record.id,
                    name: record.name,
                    brand:  record.brand,
                    stock: record.stock,
                    price: record.price,
                    type: record.productType
                }
            });
        }

        console.log("preview to product");
        // paginate method that takes in the model, page, limit, search object, order and transform
        const result = await paginate(product, page, size, search, transform, res)
        console.log("products: ", result);
        return res.status(200).send({
            success: true,
            message: 'Fetched products',
            data: result
        })
    } catch (error) {
        console.log('Failed to fetch products', error);
        return res.status(500).send({
            success: false,
            message: 'Failed to fetch products'
        })
    }
}

module.exports = {
    listProduct: listProduct,
};