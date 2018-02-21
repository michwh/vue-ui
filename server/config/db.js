const Sequelize = require('sequelize');
//require('../../.env')

const NothingLeft = new Sequelize(`mysql://root:hwh@localhost/nothing-left`,{
	define:{
		timestamps:false
	}
});

module.exports = {
	NothingLeft
}