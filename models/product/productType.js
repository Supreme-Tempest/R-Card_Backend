const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
//const product = require('./product');
const IdentificativeType = require('./identificativeType');

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
    },
    type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "identificative_types", key: "id" }
    }
}, { timestamps: false });

//ProductType.belongsTo(Identificative,  { as: 'identificative',foreignKey: 'identificative_id' });
ProductType.belongsTo(IdentificativeType,  { as: 'type',foreignKey: 'type_id' });

//ProductType.hasMany(product, { as: 'products', foreignKey: 'type_id', foreignKeyConstraint: true });
//ProductType.hasMany(identificative, { as: 'indetificatives', foreignKey: 'type_id', foreignKeyConstraint: true });

module.exports = ProductType;