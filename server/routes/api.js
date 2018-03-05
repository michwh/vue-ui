const publish = require('../controllers/publish.js')
const koaRouter = require('koa-router')
const router = koaRouter()

router.post('/publish', publish.releaseMessage)

module.exports = {
    router
};