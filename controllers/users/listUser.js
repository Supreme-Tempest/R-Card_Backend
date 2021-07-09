const User = require('../../models/users/user');
const Role = require('../../models/users/role');
const Workshop = require('../../models/workshop/workshop');
const paginate = require('../tools/pagination');
const { Op } = require("sequelize");

async function listUser(req, res) {
    try {
        // get the query params
        const { page, size, filter } = req.body;
        //let search = {};
        // add the search term to the search object
        console.log("decoded: ", req.decoded.user);
        let search = {
            where: {
                ...filter
            },
            include: [
                { model: Workshop, as: 'workshop'},
                { 
                    model: Role, 
                    as: 'role', 
                    where: { levelaccess: { [Op.lte]: 5}}, // <= 5
                }
            ],
            order: [
                ['username', 'ASC'],
            ],
        };
        
        // transform function that can be passed to the  paginate method
        const transform = (records) => {
            return records.map((record) => {
                return {
                    username: record.username,
                    name: record.name,
                    lastname:  record.lastname,
                    workshop: record.workshop,
                    active: record.active,
                    role: record.role,
                }
            });
        }

        //console.log("preview to user", search);
        // paginate method that takes in the model, page, limit, search object, order and transform
        const result = await paginate(User, page, size, search, transform, res)
        console.log("users: ", result);
        return res.status(200).send({
            success: true,
            message: 'Fetched users',
            data: result
        })
    } catch (error) {
        console.log('Failed to fetch users', error);
        return res.status(500).send({
            success: false,
            message: 'Failed to fetch users'
        })
    }
}

module.exports = {
    listUser: listUser,
};