const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const cryptoRandomString = require('crypto-random-string');
const VerificationToken = require('../../models/verificationToken');
//const verificationService = require('../../services/verificationService');
const Roles = require('../../tools/roles');

async function validateToken(user) {
    //console.log('aqui validado token');

    return new Promise((resolve, reject) => {
        let token = jwt.sign({ user: user }, 'RCardSecret', { expiresIn: 50000 });//TOKEN DB EXPIRED 50000

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
                    firstname: user.firstname,
                }));
            }

        })
    });
}

module.exports = function (app) {

    app.post('/auth/v1/register', async function (req, res) {
        console.log("register ,", req.body);
        try {
            let { username, password, email } = req.body;
            //password encryption
            password = bcrypt.hashSync(password, 10);
            //user creation
            const user = await User.create({ username: username, password: password, email: email, role: 2 });
            //verification code generation
            const verificationToken = await VerificationToken.create({ username: user.dataValues.username, token: cryptoRandomString({ length: 20, type: 'url-safe' }), createdat: new Date(), updatedat: new Date() })
            //jwt token 
            let jwtTokenEmailVerify = jwt.sign({ email: user.dataValues.email }, 'RCardSecret', { expiresIn: "1h" });
            //sending verificaiton email
            //await verificationService.sendVerificationEmail(user.dataValues.email, verificationToken.dataValues.token, jwtTokenEmailVerify)

            return res.status(200).send(`You have Registered Successfully, Activation link sent to: ${user.dataValues.email}`)

        } catch (err) {
            console.log("err1 ", err)
            return res.status(500);
        }
    })



    app.post('/auth/v1/login', async function (req, res) {
        console.log('login: ', req.body);
        try {
            const { username, password } = req.body;
            //console.log(username, password);
            const results = await User.findOne({ where: { username: username } });
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
                    return res.status(200).send(data);
                }
            }
        } catch (err) {
            console.log('register: ', err.code);
            return res.status(500).send((err.title));

        }
    });


};