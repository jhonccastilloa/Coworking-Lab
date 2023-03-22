const CountriesService = require('../services/countries.service');

const countriesService = new CountriesService();

const findCountries = async (request, response, next) => {
  try {
    const countries = await countriesService.getCountries();
    return response.status(200).json({ results: { message: 'ok', countries } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findCountries,
};
