const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const Client = require('./client');

const Facture  = sequelize.define('factures', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    client_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "clients", key: "number_card" }
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    created: {
        allowNull: false,
        type: Sequelize.DATE
    },
}, { timestamps: false });

Facture.belongsTo(Client, { as: 'client',foreignKey: 'client_id' });
//Role.hasMany(User, { as: 'users',foreignKey: 'role' });
//User.hasOne(VerificationToken, { as: 'verificationtoken',foreignKey: 'username', foreignKeyConstraint: true });

module.exports = Facture;