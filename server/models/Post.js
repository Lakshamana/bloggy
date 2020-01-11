const mongoose = require('../dbConfig')
const { schema } = require('./Tag')

const Post = new mongoose.Schema({
  url: { type: String, unique: true },
  title: { type: String, trim: true, required: true },
  body: { type: String, trim: true, required: true },
  author: { type: String, unique: true, trim: true, required: true },
  tags: [schema]
})

module.exports = mongoose.model('Post', Post)
