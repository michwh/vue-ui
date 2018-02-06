const users = require('../models/users.js');

const getUserInfo = async function (ctx) {
	const username = ctx.params.username;
	const result = await users.getUserByName(username);
	ctx.body=result;
}