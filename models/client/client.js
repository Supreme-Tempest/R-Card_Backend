const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');

const Client = sequelize.define('clients', {
    number_card: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
        unique: {
            args: true,
            msg: { code: 40145, msg: 'numero de tarjeta ya existe' },
        }
    },
    dui: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: { code: 40146, msg: 'DUI ya registrado' },
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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