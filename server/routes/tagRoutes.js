const { model: Tag } = require('../models/Tag')

async function create(ctx) {
  const { name } = ctx.request.body
  const testTag = await Tag.findOne({ name })
  if (testTag) {
    ctx.body = { code: 'errTagAlreadyExists' }
    ctx.body = 400
    return
  }

  // Another way to save objects (FYI)
  const tag = new Tag({ name })
  await tag.save()
  ctx.status = 200
}

async function list(ctx) {
  ctx.body = await Tag.find()
  ctx.status = 200
}

module.exports = { create, list }
