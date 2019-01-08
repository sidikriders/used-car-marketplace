var router = require('express').Router()

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
  res.render('admin/dashboard')
})

module.exports = router