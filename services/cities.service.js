const models = require('../database/models');
const { Op } = require('sequelize');
const { CustomError } = require('../utils/helpers');

class CitiesService {
  constructor() {}

  async findAndCount(query) {
    const options = {
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { id } = query;
    if (id) {
      options.where.id = id;
    }

    const { name } = query;
    if (name) {
      options.where.name = { [Op.iLike]: `%${name}%` };
    }

    options.distinct = true;

    const states = await models.Cities.findAndCountAll(options);
    return states;
  }

  async getCity(name) {
    const cities = await models.Cities.findOne({ where: { name } });
    if (!cities) throw new CustomError('Not found city ', 404, 'Not found');
    return cities;
  }
}

module.exports = CitiesService;
