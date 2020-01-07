const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const userRoutes = require('./routes/userRoutes')

const router = new Router({ prefix: '/api' })

router.post('/register', bodyParser(), userRoutes.register)

router.post('/login', bodyParser(), userRoutes.login)

router.use(bodyParser(), userRoutes.authz)

router.get('/ok', ctx => (ctx.body = 'ok'))

module.exports = router
