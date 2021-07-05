const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const tokenkey =  process.env.TOKEN_KEY;

module.exports = function (app) {

    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.use('/api', function (req, res, next) {
        if(req.method === 'OPTIONS') {
            next();
            return;
        }

        //console.log(req.headers);
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

        //console.log('manda token: ', 'no');
        if (token) {
            if (token.startsWith('Bearer ')) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            } else {
                return res.json({
                    success: false,
                    code: 401,
                    message: 'Auth Bearer token is not supplied'
                });
            }

            jwt.verify(token, tokenkey, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        code: 4012,
                        message: 'Token is not valid or expired'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                code: 401,
                message: 'Auth token is not supplied'
            });
        }
    });

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, authorization, content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });


};
