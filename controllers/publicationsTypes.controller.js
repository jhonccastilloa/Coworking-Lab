const PublicationsTypesService = require('../services/publicationsTypes.service');
const { getPagination, getPagingData } = require('../utils/helpers');

const publicationsTypesService = new PublicationsTypesService();

exports.findPublicationsTypes = async (req, res, next) => {
  try {
    const query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const PublicationsTypes =
      await publicationsTypesService.getPublicationsTypes(query);
    const result = getPagingData(PublicationsTypes, page, limit);
    return res.status(200).json({ results: result });
  } catch (error) {
    next(error);
  }
};

exports.findPublicationType = async (request, response, next) => {
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
exports.updatePublicationType = async (request, response, next) => {
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
