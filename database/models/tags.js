'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {}
  }
  Tags.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      img_url: DataTypes.STRING,
    },
    {
      initialAutoIncrement: 4,
      sequelize,
      modelName: 'Tags',
      tableName: 'tags',
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: ['id', 'name', 'description'],
        },
        no_timestamps: {
          attributes: { exclude: ['created_at', 'updated_at'] },
        },
      },
    }
  );
  return Tags;
};
