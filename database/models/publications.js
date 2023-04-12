'use strict';
const model = require('./index');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications.belongsTo(models.Users, {
        as: 'user',
        foreignKey: 'user_id',
      });
      Publications.belongsTo(models.PublicationsType, {
        as: 'publication_type',
        foreignKey: 'publication_type_id',
      });
      Publications.belongsTo(models.Cities, {
        as: 'cities',
        foreignKey: 'city_id',
      });
      // Publications.hasMany(models.PublicationsImages, {
      //   as: 'images',
      //   foreignKey: 'publication_id',
      // });
      // Publications.hasMany(models.Votes, {
      //   as: 'votes',
      //   foreignKey: 'publication_id',
      // });
      // Publications.hasMany(models.PublicationsTags, {
      //   as: 'tags',
      //   foreignKey: 'publication_id',
      // });
    }
  }
  Publications.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      publication_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reference_link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Publications',
      tableName: 'publications',
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: { exclude: ['content', 'city_id', 'user_id'] },
        },
        view_detail: {
          attributes: {
            exclude: ['city_id', 'publication_type_id', 'user_id'],
          },
        },
      },
    }
  );
  return Publications;
};
