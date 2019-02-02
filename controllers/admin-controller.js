var router = require('express').Router()

var models = require('../models')
var CarBrand = models.CarBrand
var CarType = models.CarType

router.get('/login', (req, res, next) => {
  if (req.session.isLogin) {
    res.redirect('dashboard')
  } else {
    res.render('admin/login-admin')
  }
})

router.get('*', (req, res, next) => {
  next()
  // if (req.session.isLogin) {
  //   next()
  // } else {
  //   res.redirect('login')
  // }
})

router.get('/dashboard', (req, res, next) => {
  res.locals.user = req.session.currUser
  res.locals.carList = []
  res.locals.brandList = []
  res.locals.typeList = []
  res.locals.transmitionList = []
  Promise.all([
    CarBrand.findAll(),
    CarType.findAll()
  ]).then(resp => {
    res.locals.brandList = resp[0]
    res.locals.typeList = resp[1]
    res.render('admin/dashboard')
  })
})

router.get('/cars/new', (req, res, next) => {
  res.render('admin/new-car')
})

module.exports = router