var router = require('express').Router()
var bcrypt = require('bcrypt')

var model = require('../models')
var User = model.User

router.post('/login-admin', (req, res, next) => {
  var { username, password } = req.body
  if (!username || !password) {
    res.send({
      status: false,
      data: 'Data not complete'
    })
  } else {
    User.findOne({
      where: {
        username: username
      }
    }).then(user => {
      if (!user) {
        res.send({
          status: false,
          data: 'User not exist'
        })
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            next(err)
          } else if (!result) {
            res.send({
              status: false,
              data: 'Wrong Password'
            })
          } else {
            req.session.isLogin = true
            req.session.currUserr = user.username
            res.send({
              status: true
            })
          }
        })
      }
    }).catch(err => next(err))
  }
})

module.exports = router