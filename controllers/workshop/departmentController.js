const bcrypt = require('bcryptjs');
const pool = require('../../services/initService').pool;
const jwt = require('jsonwebtoken');
const department = require('../../models/department');


app.post('/deparments', async function (req, res) {
    console.log('departments: ', req.body);
    try {
        const results = await Department.findAny();
        //console.log('result:', results);
        if (!results) {
            return res.status(400).send('Internal Error in department');
        } else {
            const data = results.dataValues;
            return res.status(200).send(data);
        }
    } catch (err) {
        console.log('department: ', err.message);
        return res.status(500).send(err);

    }
});