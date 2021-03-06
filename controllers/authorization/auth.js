const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const User = require('../../models/users/user');
const Role = require('../../models/users/role');
const Workshop = require('../../models/workshop/workshop');
const tokenkey =  process.env.TOKEN_KEY;

async function validateToken(user) {
    //console.log('aqui validado token');

    return new Promise((resolve, reject) => {
        let token = jwt.sign({ user: user }, tokenkey, { expiresIn: 50000 });//TOKEN DB EXPIRED 50000

        let updateLastLogin = `UPDATE users
                                SET lastLogin = ($1)
                                WHERE username = ($2)`;

        pool.query(updateLastLogin, [new Date(), user.username], function (err, results) {
            //console.log('aqui en la query del usuario');
            if (err) {
                console.log('error', err);
                reject('An Error has occured, please try again');
            }
            else {
                console.log('resolve', 'success loged');
                resolve(JSON.stringify({
                    title: 'Successfully logged in',
                    status: 'ok',
                    token: token,
                    username: user.username,
                    role: user.role,
                    name: user.name,
                    lastname: user.lastname,
                    active: user.active,
                }));
            }
        })
    });
}

module.exports = function (app) {

    app.post('/auth/v1/register', async function (req, res) {
        console.log("register ,", req.body);
        try {
            let { username, password, workshop, role, name, lastname } = req.body;
            //password encryption
            password = bcrypt.hashSync(password, 10);
            console.log ('passwrod cifrado:', password)
            //user creation
            console.log('register', 'preparacion de creacion');
            const user = await User.create(
                { 
                    username: username,
                    password: password, 
                    name: name,
                    lastname: lastname,
                    workshop: workshop, 
                    role: role,
                    active: true,
                    lastlogin: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            );
            return res.status(200).send(`You have Registered Successfully`)
        } catch (err) {
            console.log("err1 ", err.errors);
            return res.status(500).json({error: err.errors[0]});
        }
    })



    app.post('/auth/v1/login', async function (req, res) {
        console.log('login: ', req.body);
        try {
            const { username, password } = req.body;
            //console.log(username, password);
            const results = await User.findOne({ 
                where: { username: username },
                include: [
                    { model: Role, as: 'role'},
                    { model: Workshop, as: 'workshop'}
                ]
            });
            console.log('user login:', results.dataValues);
            console.log('user role: ', results.dataValues.role.dataValues);
            //console.log('result:', results);
            if (!results) {
                return res.status(401).send('Invalid login credentials');
            }
            else {
                if (!bcrypt.compareSync(password, results.dataValues.password)) {
                    return res.status(401).send('Invalid login credentials');
                }
                else {
                    console.log('validando token');
                    const data = await validateToken(results.dataValues);
                    if (results.active) {
                        console.log("validando token success");
                        return res.status(200).send(data);
                    } else {
                        return res.status(5001).send({
                            message: "usuario no se encuentra activo",
                        });
                    }
                    
                }
            }
        } catch (err) {
            console.log('login: ', err.message);
            return res.status(500).send(err);
        }
    });
};