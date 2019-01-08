'use strict'

module.exports = (sequelize, DataTypes) => {
  const CarPhotoTitle = sequelize.define('CarPhotoTitle', {
    name: DataTypes.STRING
  })

  CarPhotoTitle.associate = function(models) {
    CarPhotoTitle.hasMany(models.CarPhotos)
  }
  return CarPhotoTitle
}