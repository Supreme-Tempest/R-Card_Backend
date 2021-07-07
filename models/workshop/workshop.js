const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
//const user = require('../users/user');
const Municipio = require('./municipio');

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
    municipio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "municipios", key: "id" }
    }
}, { timestamps: false });

Workshop.belongsTo(Municipio, {as: 'municipio', foreignKey: 'municipio_id'})
//Workshop.hasMany(user, { as: 'users',foreignKey: 'workshop', foreignKeyConstraint: true });

module.exports = Workshop;