const CitiesService = require('../services/cities.service');
const { getPagination, getPagingData } = require('../utils/helpers');
const citiesService = new CitiesService();

exports.getAllCities = async (req, res, next) => {
  try {
    let query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const cities = await citiesService.findAndCount(query);
    const result = getPagingData(cities, page, limit);
    return res.json({ results: result });
  } catch (error) {
    next(error);
  }
};
