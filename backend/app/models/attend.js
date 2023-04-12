'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attend.init({
    attendId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    dateAttend: DataTypes.DATE,
    checkIn: DataTypes.TIME,
    checkOut: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'attend',
  });
  return attend;
};