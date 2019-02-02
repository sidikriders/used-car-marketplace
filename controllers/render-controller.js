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

router.get('/detail/:nameAndId', (req, res, next) => {
  var carId = req.params.nameAndId.split('-').slice(-1)[0]
  console.log('query get car detail with ID: ' + carId)
  res.locals.title = req.params.nameAndId.split('-').slice(0, -1).map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  res.locals.carImages = [
    {
      url: '/dummy/calya-depan.jpg',
      title: 'Tampak Depan'
    }, {
      url: '/dummy/calya-kanan.jpg',
      title: 'Tampak Kanan'
    }, {
      url: '/dummy/calya-belakang.jpg',
      title: 'Tampak Belakang'
    }, {
      url: '/dummy/calya-kiri.jpg',
      title: 'Tampak Kiri'
    }, {
      url: '/dummy/calya-interior-depan.jpeg',
      title: 'Interior Depan'
    }, {
      url: '/dummy/calya-interior-jok-tengah.jpeg',
      title: 'Interior Tengah'
    }, {
      url: '/dummy/calya-bagasi-dibuka.jpeg',
      title: 'Bagasi'
    }, {
      url: '/dummy/calya-mesin-dibuka.jpeg',
      title: 'Mesin'
    }
  ]
  res.render('detail-car')
})

module.exports = router