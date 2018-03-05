const db = require('../config/db.js');
const usersModel = '../schema/users.js';
const NothingLeftDB = db.NothingLeft;
const Users = NothingLeftDB.import(usersModel);

// const listModel = '../schema/list.js';
// const List = NothingLeftDB.import(listModel);

const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await Users.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

const getUserByName = async function (name) {
	//console.log("到getUserByName");
	const userInfo = await Users.findOne({
		where:{
			username:name
		}
	})

	return userInfo;
};

// const getList = async function () {
//   return List;
// };

module.exports = {
	getUserById,
  getUserByName
};