const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const user = require('./user');

const Role  = sequelize.define('roles', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, { timestamps: false });

Role.hasOne(user, { as: 'users',foreignKey: 'role', foreignKeyConstraint: true });

module.exports = Role;