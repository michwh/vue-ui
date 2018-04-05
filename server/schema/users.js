/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    head: {
      type: DataTypes.STRING(128),
      allowNull: true 
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
