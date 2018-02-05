/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
