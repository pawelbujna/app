// .env dependency
require('dotenv/config')

// General Imports
const express = require('express')
const app = express()
const port = 3000

// CORS walkaround
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

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
