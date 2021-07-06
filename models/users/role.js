const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const user = require('./user');

const Role  = sequelize.define('roles', {
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: {
            args: true,
            msg: {code: 40145, msg: 'rol ya existe'},
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, { timestamps: false });

Role.hasMany(user, { as: 'users',foreignKey: 'role', foreignKeyConstraint: true });

module.exports = Role;