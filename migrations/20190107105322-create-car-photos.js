'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CarPhotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Cars',
          key: 'id'
        }
      },
      url: {
        type: Sequelize.STRING
      },
      titleId: {
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'CarPhotoTitles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CarPhotos')
  }
}