var router = require('express').Router()

var models = require('../models')
var CarBrand = models.CarBrand

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
    CarBrand.findAll()
  ]).then(resp => {
    res.locals.brandList = resp[0]
    res.render('admin/dashboard')
  })
})

module.exports = router