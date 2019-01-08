var router = require('express').Router()

var models = require('../models')
var CarBrand = models.CarBrand

router.use('*', (req, res, next) => {
  res.locals.url = req.originalUrl
  next()
})

router.get('/', (req, res, next) => {
  console.log(process.env.NODE_ENV)
  Promise.all([
    CarBrand.findAll({
      attributes: ['id', 'name', 'logo']
    })
  ]).then(([brands]) => {
    res.locals.filters = {
      brands: brands.slice(0, 4)
    }
    res.locals.brandList = brands.slice(0, 7)
    res.render('home')
  })
})

module.exports = router