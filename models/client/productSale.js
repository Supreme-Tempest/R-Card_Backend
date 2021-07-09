const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Facture = require('./facture');
const Product = require('../product/product');

const ProductSale  = sequelize.define('products_sales', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    facture_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "factures", key: "id" }
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "products", key: "id" }
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },
    total: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },
}, { timestamps: false });

ProductSale.belongsTo(Facture, { as: 'facture',foreignKey: 'id' });
ProductSale.belongsTo(Product, { as: 'product',foreignKey: 'id' });
//Role.hasMany(User, { as: 'users',foreignKey: 'role' });
//User.hasOne(VerificationToken, { as: 'verificationtoken',foreignKey: 'username', foreignKeyConstraint: true });

module.exports = Facture;