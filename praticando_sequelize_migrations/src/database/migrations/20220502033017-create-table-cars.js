'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
     model: {
       type: Sequelize.STRING(150),
       allowNull: false
     },
     company_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
         model: 'companies',
         key: 'id'
       }
     },
     year: {
       type: Sequelize.INTEGER,
       allowNull: false
     },
     color: {
       type: Sequelize.STRING(100),
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars')

  }
};
