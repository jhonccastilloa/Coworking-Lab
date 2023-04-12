'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationsType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicationsType.hasMany(models.Publications, {
        as: 'publications',
        foreignKey: 'publication_type_id',
      });
    }
  }
  PublicationsType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PublicationsType',
      tableName: 'publications_types',
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
  return PublicationsType;
};
