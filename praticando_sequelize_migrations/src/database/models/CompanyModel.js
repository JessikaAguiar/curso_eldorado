const { Sequelize } = require('sequelize')
const database = require('../index')

const CompanyModel = database.define('companies', {
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
},  {
    timestamps: false
})

module.exports = CompanyModel
