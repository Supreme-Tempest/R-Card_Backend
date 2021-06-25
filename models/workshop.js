const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const user = require('./user');

const Workshop  = sequelize.define('workshops', {
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
    municipio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "municipios", key: "id" }
    }
}, { timestamps: false });

Workshop.hasOne(user, { as: 'users',foreignKey: 'workshop', foreignKeyConstraint: true });

module.exports = Workshop;