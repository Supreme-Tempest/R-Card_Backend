const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
const VerificationToken = require('./verificationToken');
const Role = require('./role');

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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workshop: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "workshops", key: "id" }
    },
    active: {
        type: DataTypes.BOOLEAN
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "roles", key: "role" }
    },
    lastlogin: {
        type: DataTypes.DATE
    },
    created: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updated: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, { timestamps: false });

User.belongsTo(Role, { as: 'roles',foreignKey: 'role' });
Role.hasMany(User, { as: 'users',foreignKey: 'role' });
User.hasOne(VerificationToken, { as: 'verificationtoken',foreignKey: 'username', foreignKeyConstraint: true });

module.exports = User;