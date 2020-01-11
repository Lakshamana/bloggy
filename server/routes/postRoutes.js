const crypto = require('crypto')
const Post = require('../models/Post')

async function create(ctx) {
  const { title, body, username } = ctx.request.body

  if (ctx.request.body.url) {
    ctx.body = { code: 'errInvalidRequestPayload' }
    ctx.status = 400
    return
  }

  const concat = title + '.' + username + '.' + Date.now()
  const url = crypto
    .createHash('sha256')
    .update(concat, 'utf8')
    .digest('hex')
    .substring(0, 8)
  const newPost = { title, body, url }
  await Post.insertMany(newPost)
  ctx.set('Location', '/api/posts/' + url)
  ctx.status = 200
}

async function show(ctx) {
  const { url } = ctx.params
  const post = await Post.findOne({ url }, '-_id -__v -url')
  ctx.body = post || { code: 'errResourceNotFound' }
  ctx.status = post ? 200 : 400
}

async function list(ctx) {
  const { author, title, tags } = ctx.request.body
  const query = {
    ...(author && { author: new RegExp(author, 'i') }),
    ...(title && { title: new RegExp(title, 'i') }),
    ...(tags && { tags: { $in: tags } })
  }
  console.log(query)
  ctx.status = 200
  ctx.body = await Post.find(query)
}

module.exports = { create, show, list }
