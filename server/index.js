const Koa = require('koa')
const router = require('./router')
const config = require('./envConfig')

const app = new Koa()

const { API_HOST, API_PORT, PROTOCOL } = config

function errorHandler(ctx, next) {
  return next().catch(err => {
    console.error(err)
    ctx.status = err.status || 500
    ctx.body = err
  })
}

app.use(errorHandler)
app.use(router.routes())

app.listen(API_PORT, API_HOST)

console.log(`Server running on ${PROTOCOL}://${API_HOST}:${API_PORT}`)
