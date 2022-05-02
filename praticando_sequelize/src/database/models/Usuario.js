const { Sequelize } = require('sequelize')
const database = require('../database')

const Usuario = database.define('usuarios', {
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

module.exports = Usuario
