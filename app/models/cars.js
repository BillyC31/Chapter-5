"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'createdBy',
        as: 'Users'
      })
    }
  }
  Cars.init(
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: "id"
        }
      }
    },
    {
      sequelize,
      modelName: "Cars",
    }
  );
  return Cars;
};
