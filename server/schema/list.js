module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      allowNull: false,
      //autoIncrement: true
      AutoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(50),
      allowNull: false 
    },
    product_img: {
      type: DataTypes.STRING(20000),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    illustration: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: false 
    }
  }, {
    tableName: 'list'
  });
};