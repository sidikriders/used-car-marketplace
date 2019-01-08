'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('CarBrands', [
      {
        name: 'Toyota',
        logo: '/img/car-brands/logo-toyota.png'
      }, {
        name: 'Honda',
        logo: '/img/car-brands/logo-honda.png'
      }, {
        name: 'Suzuki',
        logo: '/img/car-brands/logo-suzuki.png'
      }, {
        name: 'Daihatsu',
        logo: '/img/car-brands/logo-daihatsu.png'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('CarBrands', null, {})
  }
}
