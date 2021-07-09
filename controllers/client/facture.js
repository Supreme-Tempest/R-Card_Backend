const Facture = require('../../models/client/facture');
const { literal } = require("sequelize");
const pool = require('../../services/initService').pool;


const getAll = (req, res) => {
    console.log('facture: ', req.body);
    try {
        Facture.findAll()
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
        console.log('facture: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getAllSum = (req, res) => {
    console.log('productSum: ', req.body);
    try {
        let updateLastLogin = `Select SUM(p.price * p.stock) as total,
                                count(p.id) as products 
                                from products as p`;

        pool.query(updateLastLogin, (err, results) => {
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
        console.log('product: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const getByClient = (client, req, res) => {
    console.log('facture by client: ', req.body);
    try {
        Facture.findAll({
            where: { client_id: client }, 
            //include: Department,
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
        console.log('facture by type: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};


const save = (req, res) => {
    item = {
        client_id: req.body.client,
        total: req.body.total,
        created: new Date(),
    }
    console.log('facture save: ', item);
    try {
        Facture.create(item)
        .then((result)=>{
            console.log("facturacion factura: ", result);
            console.log("facturacion: ", "aqui pasar nuevos procuctos");
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
        console.log('facture save: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

const update = (item, req, res) => {
    console.log('facture update: ', item);
    try {
        Facture.update(item, { where: { id: item.id}})
        .then((result)=>{
            return res.status(200).json({
                success: true,
                data: result,
            });
        })
        .catch((e)=>{
            console.log("error", e);
            return res.status(400).json({
                success: false,
                error: e,
            });
        });
    } catch (err) {
        console.log('facture update: ', err.message);
        return res.status(500).json({
            success: false,
            error: err,
        });
    }
};

module.exports = {
    getAll: getAll,
    //getAllSum: getAllSum,
    getByClient: getByClient,
    save: save,
    update: update,  
};