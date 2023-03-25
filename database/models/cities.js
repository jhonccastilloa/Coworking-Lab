'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(models) {
      Cities.belongsTo(models.States, { as: 'state', foreignKey: 'state_id' });
    }
  }
  Cities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      state_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Cities',
      tableName: 'cities',
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: ['id', 'name'],
        },
        no_timestamps: {
          attributes: { exclude: ['created_at', 'updated_at'] },
        },
      },
    }
  );
  return Cities;
};
