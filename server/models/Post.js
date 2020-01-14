const mongoose = require('../dbConfig')

const Post = new mongoose.Schema({
  url: { type: String, unique: true },
  title: { type: String, trim: true, required: true },
  body: { type: String, trim: true, required: true },
  author: { type: String, unique: true, trim: true, required: true },
  date: { type: Date },
  tags: [
    {
      name: { type: String, trim: true, required: true }
    }
  ]
})

module.exports = mongoose.model('Post', Post)
