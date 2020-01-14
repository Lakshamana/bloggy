const mongoose = require('mongoose')
const { db } = require('../envConfig')

try {
  const { useNewUrlParser } = db
  ;(async () => {
    await mongoose.connect(db.url, { useNewUrlParser })
    db.onSuccess()
  })()
} catch (err) {
  db.onError(err)
}

module.exports = mongoose
