const StatesService = require('../services/states.service');
const { getPagination, getPagingData } = require('../utils/helpers');
const statesService = new StatesService();

exports.findStates = async (req, res, next) => {
  try {
    const query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const states = await statesService.findAndCount(query);
    const result = getPagingData(states, page, limit);
    return res.status(200).json({ results: result });
  } catch (error) {
    next(error);
  }
};
