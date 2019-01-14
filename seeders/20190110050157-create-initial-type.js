'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('CarTypes', [
      {
        name: 'Sedan'
      }, {
        name: 'Hatchback'
      }, {
        name: 'MPV'
      }, {
        name: 'SUV'
      }, {
        name: 'Mini Bus'
      }, {
        name: 'Truck / Pickup'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CarTypes', null, {})
  }
}
