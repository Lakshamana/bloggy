const mongoose = require('../dbConfig')

const Post = new mongoose.Schema({
  url: { type: String, unique: true },
  title: { type: String, trim: true },
  body: { type: String, trim: true }
})

module.exports = mongoose.model('Post', Post)
