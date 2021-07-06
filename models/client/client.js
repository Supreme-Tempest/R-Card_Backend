const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const Client = sequelize.define('clients', {
    number_card: {
        allowNull: false,
        primaryKey: true,
        unique: {
            args: true,
            msg: { code: 40145, msg: 'client card ya existe' },
        }
    },
    dui: {
        allowNull: false,
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: { code: 40145, msg: 'client ya existe' },
        }
    },
    creation_date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    birthday: {
        allowNull: false,
        type: DataTypes.DATE
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    }
}, { timestamps: false });


module.exports = Client;