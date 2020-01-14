const Koa = require('koa')
const router = require('./router')
const config = require('../envConfig')
const cors = require('@koa/cors')

const app = new Koa()

const { REACT_APP_API_PORT, REACT_APP_API_HOST, REACT_APP_PROTOCOL } = config

function errorHandler(ctx, next) {
  return next().catch(err => {
    console.error(err)
    ctx.status = err.status || 500
    ctx.body = err
  })
}

const origin = `${REACT_APP_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`
app.use(cors({ origin: '*' }))
app.use(errorHandler)
app.use(router.routes())

app.listen(REACT_APP_API_PORT, REACT_APP_API_HOST)

console.log('Server running on ' + origin)
