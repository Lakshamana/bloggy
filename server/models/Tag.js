const mongoose = require('../dbConfig')

const Tag = new mongoose.Schema({
  name: { type: String, trim: true, unique: true }
})

module.exports = { schema: Tag, model: mongoose.model('Tag', Tag) }
