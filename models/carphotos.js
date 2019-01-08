'use strict'
module.exports = (sequelize, DataTypes) => {
  const CarPhotos = sequelize.define('CarPhotos', {
    carId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING
  })

  CarPhotos.associate = function(models) {
   // CarPhotos.belongsTo(models.Cars)
    CarPhotos.belongsTo(models.CarPhotoTitle)
  }
  return CarPhotos
}
