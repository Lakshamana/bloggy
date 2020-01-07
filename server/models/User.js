const mongoose = require('../dbConfig')

const User = new mongoose.Schema({
  username: { type: String, unique: true, trim: true },
  password: { type: String }
})

module.exports = mongoose.model('User', User)
