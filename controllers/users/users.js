const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const User = require('../../models/users/user');
const Role = require('../../models/users/role');
const Workshop = require('../../models/workshop/workshop');
const tokenkey =  process.env.TOKEN_KEY;
const passwordKey = parseInt(process.env.PASSWORD_KEY);

const validation = (element) => {
    let error = [];
    if (!element.username) {
        error.push({message: { code: 40150, msg: 'falta nombre de usuario' }})
    }
    if (!element.password) {
        error.push({message: { code: 40151, msg: 'falta password' }})
    }
    if (!element.workshop) {
        error.push({message: { code: 40152, msg: 'falta workshop' }})
    }
    if (!element.role) {
        error.push({message: { code: 40151, msg: 'falta role' }})
    }
    if (!element.name) {
        error.push({message: { code: 40151, msg: 'falta name' }})
    }
    if (!element.lastname) {
        error.push({message: { code: 40151, msg: 'falta lastname' }})
    }
    return error.length != 0 ? error : null; 
}

const Register = (req, res, flagNew) => {
    console.log("register ,", req.body);
    try {
        const levelAccess = req.decoded.user.role.levelaccess;
        let { username, password, workshop, role, name, lastname, roleAccess } = req.body;
        if ((roleAccess >= levelAccess) || !roleAccess) {
            return res.status(400).json({
                success: false,
                error: [{
                    message: { code: 40148, msg: 'nivel de acceso insuficiente para esta accion' },
                }]
            });
        }
        let validate = validation({
            username: username,
            password: password,
            workshop: workshop,
            role: role,
            name: name,
            lastname: lastname,
        })
        if (validate){
            return res.status(400).json({
                success: false,
                error: validate
            });
        }
        console.log("prepassword ,", password);
        password = bcrypt.hashSync(password, passwordKey);
        console.log ('passwrod cifrado:', password)
        //user creation
        console.log('register', 'preparacion de creacion');

        if (!flagNew) {
            User.create(
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
            ).then((result)=>{
                return res.status(200).json({
                    success: true,
                });
            })
            .catch((e)=>{
                return res.status(200).json({
                    success: false,
                    error: e.errors
                });
            });
        } else {
            User.update(
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
            )
            .then((result)=>{
                return res.status(200).json({
                    success: true,
                });
            })
            .catch((e)=>{
                return res.status(200).json({
                    success: false,
                    error: e.errors
                });
            });
            
        }
        
    } catch (err) {
        console.log("err1 ", err.errors);
        return res.status(500).json({
            success: false,
            error: err.errors
        });
    }
}


const Updater = (req, res) => {
    Register(req, res, true);
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
        console.log("err1 ", err.errors);
        return res.status(500).json({error: err.errors[0]});
    }
}

const transform = (records) => {
    return records.map((record) => {
        return {
            username: record.role,
            name: record.name,
            lastname:  record.lastname,
            role: record.role,
            workshop: record.workshop,
            active: record.active,
            lastlogin: record.lastlogin,
        }
    });
}


module.exports = {
    save: Register,
    update: Updater,
    getAll: getAll,
}