const { Sequelize } = require('sequelize')
const database = require('../database')

const Marca = database.define('marcas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false,
        }
    },
    {
        timestamps: false
    })

module.exports = Marca
