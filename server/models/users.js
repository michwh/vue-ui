const db = require('../config/db.js');
const usersModel = '../schema/users.js';
const NothingLeftDB = db.NothingLeft;
const Users = NothingLeftDB.import(usersModel);
const bcrypt = require('bcryptjs')


const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await Users.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}


const getUserByName = async function (name) {
	const userInfo = await Users.findOne({
		where:{
			username:name
		}
	})

	return userInfo;
};

//创建新的用户
const createUser = async function (data) {
  const password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
  await Users.create({
    id: 1,
    username: data.userName,
    password: password,
    head: null,
    email: data.email
  })    
    return 200//注册成功 
}

module.exports = {
  getUserById,
  createUser,
  getUserByName
};
