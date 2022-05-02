const { Sequelize } = require('sequelize')
const database = require('../index')

const ComponyModel = database.define('companies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})

module.exports = CompanyModel
