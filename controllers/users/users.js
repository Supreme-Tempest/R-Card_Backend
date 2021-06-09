const User = require('../../models/user');
/*const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const cryptoRandomString = require('crypto-random-string');
const VerificationToken = require('../../models/verificationToken');
//const verificationService = require('../../services/verificationService');
const Roles = require('../../tools/roles');*/

async function getUsers() {
    //console.log('aqui validado token');

    return new Promise((resolve, reject) => {
        let allUsers = `SELECT * FROM users`;

        pool.query(allUsers, [], function (err, results) {
            //console.log('aqui en la query del usuario');
            if (err) {
                console.log('error', err);
                reject('An Error has occured, please try again');
            }
            else {
                resolve(JSON.stringify({
                    title: 'Successfully get all users',
                    users: results,
                }));
            }

        })
    });
}

module.exports = function (app) {

    app.get('/api/user/list', async (req, res) => {
        console.log("listUser: ", 'getAll');
        try {
            const results = //getUsers();
                await User.findAll({ attributes: [ 'username', 'role', 'email' ] });
            //console.log('result:', results);
            if (!results) {
                return res.status(401).send('No se fue posible obtener los datos');
            }
            else {
                return res.status(200).send(results);
            }
        } catch (err) {
            console.log('error: ', err);
            return res.status(500).send((err.title));

        }
    })

};