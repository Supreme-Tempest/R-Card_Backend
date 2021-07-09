const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const User = require('../../models/users/user');
const Role = require('../../models/users/role');
const Workshop = require('../../models/workshop/workshop');
const tokenkey =  process.env.TOKEN_KEY;
const passwordKey = parseInt(process.env.PASSWORD_KEY);

const Register = async (req, res) => {
    console.log("register ,", req.body);
    try {
        let { username, password, workshop, role, name, lastname } = req.body;
        console.log("prepassword ,", password);
        password = bcrypt.hashSync(password, passwordKey);
        console.log ('passwrod cifrado:', password)
        //user creation
        console.log('register', 'preparacion de creacion');
        const user = await User.create(
            { 
                username: username,
                password: password, 
                name: name,
                lastname: lastname,
                workshop_id: workshop, 
                role_id: role,
                active: true,
                lastlogin: null,
                created: new Date(),
                updated: new Date(),
            },
        );
        return res.status(200).send(`You have Registered Successfully`)
    } catch (err) {
        console.log("err1 ", err.errors);
        return res.status(500).json({error: err.errors[0]});
    }
}

const Updater = async (req, res) => {
    console.log("updater ,", req.body);
    try {
        let { username, password, workshop, role, name, lastname } = req.body;
        console.log("prepassword ,", password);
        password = bcrypt.hashSync(password, passwordKey);
        console.log ('passwrod cifrado:', password)
        //user creation
        console.log('register', 'preparacion de creacion');
        const user = await User.update(
            { 
                username: username,
                password: password, 
                name: name,
                lastname: lastname,
                workshop_id: workshop, 
                role_id: role,
                active: true,
                updated: new Date(),
            },
            { where: { username: username}}
        );
        return res.status(200).send(`You have Updated Successfully`)
    } catch (err) {
        console.log("err1 ", err.errors);
        return res.status(500).json({error: err.errors[0]});
    }
}

const getAll = (req, res) => {
    console.log("get all ,", req.body);
    try {
        //user creation
        console.log('get', 'preparacion de geting');
        User.getAll(
            {
                include: [
                    { model: Workshop, as: 'workshop' },
                    { model: Role, as: 'role' }
                ],
                order: [
                    ['username', 'ASC'],
                ],
            }
        )
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
        console.log("err1 ", err.errors);
        return res.status(500).json({error: err.errors[0]});
    }
}


module.exports = {
    save: Register,
    update: Updater,
    getAll: getAll,
}