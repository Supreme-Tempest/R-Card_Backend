const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const { sequelize } = require('../../services/initService');
//const Workshop = require('./workshop');
const Department = require('./department');

const Municipio  = sequelize.define('municipios', {
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
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "departments", key: "id" }
    }
}, { timestamps: false });

Municipio.belongsTo(Department,  { as: 'department',foreignKey: 'department_id' });
//Municipio.belongsTo(department, {as: 'department', foreignKey: 'department'} );
//Municipio.hasMany(workshop, { as: 'workshops', foreignKey: 'municipio' });

module.exports = Municipio;