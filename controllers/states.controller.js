const StatesService = require('../services/states.service');

const statesService = new StatesService();

const findStates = async (request, response, next) => {
  try {
    const states = await statesService.getStates();
    return response.status(200).json({ results: { message: 'ok', states } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findStates,
};
