var router = require('express').Router()

router.get('/login', (req, res, next) => {
  res.render('admin/login-admin')
})

// router.get('*', (req, res, next) => {
//   if (req.session.isLogin) {

//   }
// })

router.get('/', (req, res, next) => {
  res.render('admin/dashboard')
})

module.exports = router