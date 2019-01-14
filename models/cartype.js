'use strict'
module.exports = (sequelize, DataTypes) => {
  const CarType = sequelize.define('CarType', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    icon: DataTypes.STRING
  })

  CarType.associate = function(models) {
  }
  return CarType
}