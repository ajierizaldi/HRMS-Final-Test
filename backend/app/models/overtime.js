'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  overtime.init({
    overtimeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    dateOvertime: DataTypes.DATE,
    reason: DataTypes.TEXT,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'overtime',
  });
  return overtime;
};