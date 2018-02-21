const auth = require('../controllers/users.js');
const koaRouter = require('koa-router');
const router = koaRouter();
//const router = require('koa-router')();


router.get('/users/:id', auth.getUserInfo)
router.post('/users', auth.postUserAuth)

module.exports = {
    router
};

