'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'adminmokas',
      password: '$2b$10$QVi5PmsDfFCVUHHbEjFRQeBmcad3g8.qDA0JNto5wjiE1kh0t1bUO'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
