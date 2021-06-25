const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const workshop = require('./workshop');

const Municipio  = sequelize.define('municipios', {
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
    department: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "departments", key: "id" }
    }
}, { timestamps: false });

Municipio.hasMany(workshop, { as: 'workshops', foreignKey: 'municipio', foreignKeyConstraint: true });

module.exports = Municipio;