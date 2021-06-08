const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const routes = require('./controllers')
const path = require('path')
require('dotenv').config()

// models
// const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static public
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(routes)

// db connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`)
    })
  )
