const path = require('path')

const suffixes = {
  development: '',
  production: '.prod',
  test: '.test'
}

const tail = suffixes[process.env.NODE_ENV] || ''

const envSetup = require('dotenv').config({
  path: path.resolve(__dirname, '.env' + tail)
})

if (envSetup.error) {
  throw envSetup.error
}

const dbOtptions = {
  url: process.env.DBURI,
  type: process.env.DBTYPE,
  onError: err => {
    console.log('DB Connection Failed!')
  },
  onSuccess: () => {
    console.log('DB Successfully Connected!')
  }
}

const {
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_PROTOCOL
} = process.env

module.exports = {
  db: {
    ...dbOtptions,
    ...(process.env.DBCONNECTOR === 'mongoose' && { useNewUrlParser: false })
  },
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_PROTOCOL
}
