const { Sequelize } = require('sequelize')
const database = require('./database')
const Usuario = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        key: 'usuario_id'
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        key: 'usuario_name'
    }
},
    {
        timestamps: false
})

module.exports = Usuario
