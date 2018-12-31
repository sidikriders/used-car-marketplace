const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.static('./assets'))
app.set('view engine', 'pug')
app.use(morgan('combined'))

app.get('/', (req, res, next) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('listening to port 3000')
})