const mongoose = require('../dbConfig')

const User = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, unique: true }
})

module.exports = mongoose.model('User', User)
