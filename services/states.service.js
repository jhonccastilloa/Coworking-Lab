const models = require('../database/models');
const { Op } = require('sequelize');
const { CustomError } = require('../utils/helpers');

class StatesService {
  constructor() {}

  async getStates() {
    let states = await models.States.findAll();
    if (!states.length) throw new CustomError('Not found states', 404, 'Not Found');
    return states;
  }
}

module.exports = StatesService;
