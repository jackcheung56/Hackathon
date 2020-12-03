'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here


      User.hasOne(models.Account, {
        foreignKey: 'user_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'

      })

      








    }
  };
  User.init({
    email: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      field: 'password_digest'
    }

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};