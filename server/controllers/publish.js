const publish = require('../models/publish.js')

const releaseMessage = async function (ctx) {
  const data = ctx.request.body
  const code = await publish.releaseMessage(data)
  ctx.body = {
    code: code
  }
}

module.exports = {
  releaseMessage
};