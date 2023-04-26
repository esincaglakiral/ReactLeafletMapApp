"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class markers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  markers.init(
    {
      id: {
        allowNull: false, // null olamaz
        type: DataTypes.INTEGER,
        primaryKey: true, // birincil anahtar
        autoIncrement: true, // otomatik artır
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "markers",
      modelName: "Markers",
    }
  );
  return markers;
};
