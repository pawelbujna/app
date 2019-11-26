const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  roles: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('user', UserSchema)
