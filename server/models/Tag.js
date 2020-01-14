const mongoose = require('../dbConfig')

const Tag = new mongoose.Schema({
  name: { type: String, trim: true, unique: true }
})

module.exports = mongoose.model('Tag', Tag)
