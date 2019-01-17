var router = require('express').Router()

var models = require('../models')
var CarBrand = models.CarBrand

router.use('*', (req, res, next) => {
  res.locals.url = req.originalUrl
  next()
})

router.get('/', (req, res, next) => {
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

router.get('/cari-mobil', (req, res, next) => {
  res.locals.title = 'Pencarian Mobil'
  res.locals.arrayList = [1, 2, 3, 4, 5, 6, 7, 8]
  res.locals.paging = {
    current: 2,
    list: [1, 2, 3, 4]
  }
  res.render('cari-mobil')
})

router.get('/daftarkan-mobil', (req, res, next) => {
  res.render('register-car')
})

module.exports = router