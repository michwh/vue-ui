const Sequelize = require('sequelize');

const NothingLeft = new Sequelize('mysql://root:116huang10@localhost/nothing-left',{
	define:{
		timestamps:false
	}
});

module.exports = {
	NothingLeft
}