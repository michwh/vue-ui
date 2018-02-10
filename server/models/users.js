const db = require('../config/db.js');
const usersModel = '../schema/users.js';
const NothingLeftDB = db.NothingLeft;
const Users = NothingLeftDB.import(usersModel);

const getUserByName = async function (name) {
	const userInfo = await Users.findOne({
		where:{
			username:name
		}
	})

	return userInfo;
};

module.exports = {
  getUserByName
};