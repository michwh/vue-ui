const auth = require('../controllers/users.js');
const router = require('koa-router')();


router.get('users/:username',auth.getUserInfo)

module.exports = router;

