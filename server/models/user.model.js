const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    unigue: true,
    require: true
  },

  password: {
    type: String,
    require: true,
    minLength: 6
  }
})

module.exports = model('users', userSchema)
