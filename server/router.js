const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const tagRoutes = require('./routes/tagRoutes')

const router = new Router({ prefix: '/api' })

// Auth routes
// router.post('/register', bodyParser(), userRoutes.register)
// router.post('/login', bodyParser(), userRoutes.login)
// router.use(bodyParser(), userRoutes.authz)

// Posts routes
router.post('/posts', bodyParser(), postRoutes.create)
router.get('/posts/:url', postRoutes.show)
router.post('/posts/query', bodyParser(), postRoutes.list)

// Tag routes
router.post('/tags', bodyParser(), tagRoutes.create)
router.get('/tags', tagRoutes.list)

module.exports = router
