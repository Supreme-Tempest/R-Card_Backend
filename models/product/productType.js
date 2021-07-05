const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const product = require('./product');
const identificative = require('./identificative');

const ProductType  = sequelize.define('product_types', {
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

ProductType.hasMany(product, { as: 'products', foreignKey: 'productType', foreignKeyConstraint: true });
ProductType.hasMany(identificative, { as: 'indetificatives', foreignKey: 'productType', foreignKeyConstraint: true });

module.exports = ProductType;