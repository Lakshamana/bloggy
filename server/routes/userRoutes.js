const User = require('../models/User')
const bcrypt = require('bcrypt')
const { tokenSign, tokenVerify } = require('../utils')

async function register(ctx) {
  const { username, password } = ctx.request.body

  if (!username || !password) {
    ctx.body = { code: 'invalidRequestPayload' }
    ctx.status = 400
    return
  }

  try {
    const user = await User.findOne({ username })
    if (user) {
      ctx.body = { code: 'userAlreadyExists' }
      ctx.status = 400
      return
    }
  } catch (err) {
    ctx.body = { code: 'errOnDbFetch', message: err.message }
    ctx.status = 400
    return
  }

  const passwordHash = bcrypt.hashSync(password, 10)
  await User.insertMany({ username, password: passwordHash })
  ctx.status = 201
  ctx.set('Location', '/api/users/' + username)
}

async function login(ctx) {
  const { username, password, rememberMe } = ctx.request.body

  if (!username || !password) {
    ctx.body = { code: 'invalidRequestPayload' }
    ctx.status = 400
    return
  }

  const user = await User.findOne({ username })
  if (!user) {
    ctx.body = { code: 'userDoesNotExists' }
    ctx.status = 400
    return
  }

  if (!bcrypt.compareSync(password, user.toObject().password)) {
    ctx.body = { code: 'errLoginDataMismatch' }
    ctx.status = 400
    return
  }

  // Get JWT
  const userData = { username, password }
  const accessToken = tokenSign(userData, rememberMe)
  ctx.status = 200
  ctx.cookies.set('accessToken', accessToken)
}

async function authz(ctx, next) {
  const accessToken = ctx.cookies.get('accessToken')
  try {
    tokenVerify(accessToken)
    await next()
  } catch (e) {
    ctx.status = 400
    ctx.body = { code: 'errOnAuthz' }
  }
}

module.exports = { register, login, authz }
