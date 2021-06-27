const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const product = require('./product');
const identificative = require('./identificative');

const TipeProduct  = sequelize.define('tipeproducts', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { timestamps: false });

TipeProduct.hasMany(product, { as: 'products', foreignKey: 'tipeproduct', foreignKeyConstraint: true });
TipeProduct.hasMany(identificative, { as: 'indetificatives', foreignKey: 'tipeproduct', foreignKeyConstraint: true });

module.exports = TipeProduct;