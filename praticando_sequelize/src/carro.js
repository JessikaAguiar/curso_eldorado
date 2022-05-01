const { Sequelize } = require('sequelize')
const database = require('./database')

const Carro = database.define('carros', {
    carro_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    carro_modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    carro_marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    carro_ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    carro_cor: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Carro