const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const ProductType = require('./productType');
const Identificative = require('./identificative');

const Product  = sequelize.define('products', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "product_types", key: "id" }
    },
    identificative_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "identificatives", key: "id" }
    }
},{ timestamps: false });

Product.belongsTo(Identificative,  { as: 'identificative',foreignKey: 'identificative_id' });
Product.belongsTo(ProductType,  { as: 'type',foreignKey: 'type_id' });

module.exports = Product; 