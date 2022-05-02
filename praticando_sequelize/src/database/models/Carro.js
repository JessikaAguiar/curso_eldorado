const { Sequelize } = require('sequelize')
const database = require('../database')
const Marca = require('./Marca')

const Carro = database.define('carros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    modelo: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    marca_id: {
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

Carro.belongsTo(Marca, {
    foreignKey: 'marca_id'
})

Marca.hasMany(Carro, {
    foreignKey: 'marca_id'
})
module.exports = Carro
