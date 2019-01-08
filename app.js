const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.static('./assets'))
app.set('view engine', 'pug')
app.use(morgan('combined'))

app.get('/', (req, res, next) => {
  res.render('home')
})

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
  res.render('error')
})

app.listen(3000, () => {
  console.log('listening to port 3000')
})