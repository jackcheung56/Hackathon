'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    static associate(models) {
      // define association here


      Profile.belongsTo(models.Account, {
        foreignKey: 'account_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })






    }
  };
  Profile.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    accountId: {
      type: DataTypes.INTEGER,
      field: 'account_id',
      references: {
        model: 'accounts',
        key: 'id'
      }
    }


  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};