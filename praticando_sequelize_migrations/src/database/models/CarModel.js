const { Sequelize } = require('sequelize')
const database = require('../index')
const ComponyModel = require('./CompanyModel')

const CarModel = database.define('carros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    model: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

Carro.belongsTo(ComponyModel, {
    foreignKey: 'compony_id'
})

Marca.hasMany(CarModel, {
    foreignKey: 'compony_id'
})
module.exports = CarModel
