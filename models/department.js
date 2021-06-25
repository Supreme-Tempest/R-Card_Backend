const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const VerificationToken = require('./verificationToken');

const Department  = sequelize.define('departments', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: {
            args: true,
            msg: {code: 40145, msg: 'usuario ya existe'},
        }
    }
});

Department.hasOne(municipio, { as: 'municipios',foreignKey: 'department', foreignKeyConstraint: true });

module.exports = Departamento;