const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
//const municipio = require('./municipio');

const Department  = sequelize.define('departments', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: {code: 40145, msg: 'departamento ya existe'},
        }
    }
},{ timestamps: false });

//Department.hasMany(municipio, { as: 'municipios',foreignKey: 'department_id', foreignKeyConstraint: true });

module.exports = Department; 