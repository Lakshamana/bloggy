const { sign, verify } = require('jsonwebtoken')

const SECONDS_PER_DAY = 10 //60 * 60 * 24

function tokenSign(
  user,
  rememberMe,
  expiresIn = SECONDS_PER_DAY,
  rememberMeFactor = 7
) {
  const exp =
    Math.floor(Date.now() / 1000) +
    (rememberMe ? expiresIn * rememberMeFactor : expiresIn)
  return sign({ user, exp }, process.env.JWT_SECRET)
}

function tokenVerify(token) {
  verify(token, process.env.JWT_SECRET)
}

module.exports = { tokenSign, tokenVerify }
