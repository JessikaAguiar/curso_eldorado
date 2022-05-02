'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies',[
      { name: 'Chevrolet' },
      { name: 'Honda' },
      { name: 'Renault' },
      { name: 'Wolks' },
      { name: 'Nissan' },
      { name: 'Toyota' },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {})
  }
};
