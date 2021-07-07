const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
//const product = require('./product');
//const identificative = require('./identificative');

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

//ProductType.hasMany(product, { as: 'products', foreignKey: 'type_id', foreignKeyConstraint: true });
//ProductType.hasMany(identificative, { as: 'indetificatives', foreignKey: 'type_id', foreignKeyConstraint: true });

module.exports = ProductType;