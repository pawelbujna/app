// .env dependency
require('dotenv/config')

// General Imports
const express = require('express')
const app = express()
const port = 3000

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Import routes
const usersRoutes = require('./routes/users')

// Use routes
app.use('/users', usersRoutes)

// DB connection
const mongoose = require('mongoose')
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => { console.log(`Mongoose connected to ${process.env.DB_CONNECTION}`) }
)

app.listen(port, () => console.log(`App listening on port ${port}!`))
