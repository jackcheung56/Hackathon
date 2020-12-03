'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {

    static associate(models) {
      // define association here

      Account.belongsTo(models.User, {
        foreignKey: 'user_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })


      Account.hasMany(models.Profile, {
        foreignKey: 'account_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })








      
    }
  };
  Account.init({
    tier: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts'
  });
  return Account;
};