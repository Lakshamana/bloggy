const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./models/User')

const router = new Router({ prefix: '/api' })

router.get('/users', async ctx => {
  const users = await User.find()
  ctx.body = users
})

module.exports = router
