const CountriesService = require('../services/countries.service');
const { getPagination, getPagingData } = require('../utils/helpers');

const countriesService = new CountriesService();

exports.findCountries = async (req, res, next) => {
  try {
    let query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const countries = await countriesService.getCountries(query);
    const result = getPagingData(countries, page, limit);
    return res.status(200).json({ results: result });
  } catch (error) {
    next(error);
  }
};
