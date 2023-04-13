'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reimburse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userId',
        // targetKey: 'userId',
        as: 'user'
      })
    }
  }
  reimburse.init({
    reimburseId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    dateReimburse: DataTypes.DATE,
    balance: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('pending', 'approved', 'rejected')
  }, {
    sequelize,
    modelName: 'reimburse',
  });
  return reimburse;
};