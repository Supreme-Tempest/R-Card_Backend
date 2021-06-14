const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../services/initService');
const VerificationToken = require('./verificationToken');

const User  = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: {
            args: true,
            msg: {code: 40145, msg: 'usuario ya existe'},
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:   {
            args: true,
            msg: {code: 40146, msg: 'email ya registrado'},
        },
    },
    isVerified: {
        type: DataTypes.BOOLEAN
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "roles", key: "id" }
    },
    lastlogin: {
        type: DataTypes.DATE
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

User.hasOne(VerificationToken, { as: 'verificationtoken',foreignKey: 'username', foreignKeyConstraint: true });

module.exports = User;