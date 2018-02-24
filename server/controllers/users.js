const users = require('../models/users.js');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

const getUserInfo = async function (ctx){
	const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await users.getUserById(id) // 通过await “同步”地返回查询结果
  ctx.body = result
}

const postUserAuth =async function (ctx) {
	const data = ctx.request.body; // post过来的数据存在request.body里
	const userInfo = await users.getUserByName(data.name)
	if (userInfo != null) { // 如果查无此用户会返回null
	  if (!bcrypt.compareSync(data.password, userInfo.password)) {
		ctx.body = {
		  code: 202, 
		  info: '密码错误！'
		}
	  } else {
		const userToken = {
		  name: userInfo.username,
		  id: userInfo.id
		}
		const secret = 'nothing-left' // 指定密钥
		const token = jwt.sign(userToken, secret) // 签发token
		ctx.body = {
		  code: 200,
		  token: token // 返回token
		}
	  }
	} else {
	  ctx.body = {
		code: 201,
		info: '用户不存在！' // 如果用户不存在返回用户不存在
	  }
	}
  }

module.exports = {
	getUserInfo,
	postUserAuth
};