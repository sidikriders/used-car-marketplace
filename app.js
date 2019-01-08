const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')

const appConfig = require('./app-config.js')
const renderController = require('./controllers/render-controller')
const adminController = require('./controllers/admin-controller')
const apiController = require('./controllers/api-controller')

const app = express()

app.use(express.static('./assets'))
app.set('view engine', 'pug')
app.use(morgan('combined'))
app.use(bodyParser.json())
app.enable('trust-proxy')
app.use(session({
  secret: appConfig.session.secret,
  resave: false,
  saveUninitialized: false,
  cookies: {
    secure: true
  }
}))

app.use('/api', apiController)
app.use('/admin', adminController)
app.use('/', renderController)
app.use('*', (req, res, next) => {
  next({
    code: 404,
    msg: 'Page Not Found'
  })
})


app.use((err, req, res, next) => {
  console.error(err)
  res.locals.err = {
    code: err.code || 500,
    msg: err.msg || 'Internal Server Error'
  }
  if (req.originalUrl.split('/')[1] === 'api') {
    if (!err.data && err.msg) { err.data = err.msg }
    if (!err.msg && err.data) { err.msg = err.data }
    res.send(err)
  } else {
    res.render('error')
  }
})

app.listen(3000, () => {
  console.log('listening to port 3000')
})