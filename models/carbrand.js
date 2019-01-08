'use strict'
module.exports = (sequelize, DataTypes) => {
  const CarBrand = sequelize.define('CarBrand', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    logo: DataTypes.STRING
  })

  CarBrand.associate = function(models) {
    // associations can be defined here
  }
  return CarBrand
}