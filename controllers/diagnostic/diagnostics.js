const pool = require('../../services/initService').pool;


const getFactures = (req, res) => {
    console.log('facture: ', req.body);
    try {
        let query = `select count(f.id) as total, sum(f.total) as amount from factures as f;`;

        pool.query(query, (err, results) => {
            console.log("result", results.rows);
            if (results) {
                return res.status(200).json({
                    success: true,
                    data: results.rows,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: e,
                });
            }
        })
    } catch (err) {
        console.log('facture: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getProducts = (req, res) => {
    console.log('prodcuts: ', req.body);
    try {
        let query = `select count(p.id) as products, sum(p.stock) as total from products as p;`;

        pool.query(query, (err, results) => {
            console.log("result", results.rows);
            if (results) {
                return res.status(200).json({
                    success: true,
                    data: results.rows,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: e,
                });
            }
        })
    } catch (err) {
        console.log('products: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getProductSales = (req, res, flag) => {
    console.log('prodcutssales: ', req.body);
    try {

        let query = `select p.product_id, sum(p.amount) as total 
        from products_sales as p group by p.product_id
        order by total desc fetch first 3 rows only;`;
        if (flag) {
            query = `select p.product_id, sum(p.amount) as total 
            from products_sales as p group by p.product_id
            order by total asc fetch first 3 rows only;`;
        }

        pool.query(query, (err, results) => {
            console.log("result", results.rows);
            if (results) {
                return res.status(200).json({
                    success: true,
                    data: results.rows,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: e,
                });
            }
        })
    } catch (err) {
        console.log('productssales: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getFactures: getFactures,
    getProducts: getProducts,
    getProductSales: getProductSales,
}