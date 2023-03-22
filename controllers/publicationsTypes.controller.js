const PublicationsTypesService = require('../services/publicationsTypes.service');

const publicationsTypesService = new PublicationsTypesService();
const findPublicationsTypes = async (request, response, next) => {
  try {
    const PublicationsTypes =
      await publicationsTypesService.getPublicationsTypes();
    return response
      .status(200)
      .json({ results: { message: 'ok', PublicationsTypes } });
  } catch (error) {
    next(error);
  }
};
const findPublicationType = async (request, response, next) => {
  const { id } = request.params;
  try {
    const PublicationType = await publicationsTypesService.getPublicationType(
      id
    );
    return response
      .status(200)
      .json({ results: { message: 'ok', PublicationType } });
  } catch (error) {
    next(error);
  }
};
const updatePublicationType = async (request, response, next) => {
  const { id } = request.params;
  const { name, description } = request.body;
  const data = {
    name,
    description,
  };
  try {
    await publicationsTypesService.updatePublicationType(id, data);
    return response.status(200).json({ results: { message: 'Succes Update' } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findPublicationsTypes,
  findPublicationType,
  updatePublicationType,
};
