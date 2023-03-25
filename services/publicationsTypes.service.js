const models = require('../database/models');
const { Op } = require('sequelize');
const { CustomError } = require('../utils/helpers');

class PublicationsTypesService {
  constructor() {}

  async getPublicationsTypes() {
    let publicationsTypes = await models.PublicationsType.findAll();
    if (!publicationsTypes)
      throw new CustomError('Not found publications types', 404, 'Not Found');
    return publicationsTypes;
  }
  async getPublicationType(id) {
    let publicationType = await models.PublicationsType.findByPk(id);
    if (!publicationType)
      throw new CustomError('Not found publication type', 404, 'Not Found');
    return publicationType;
  }

  async updatePublicationType(id, obj) {
    const transaction = await models.sequelize.transaction();
    try {
      let publicationType = await models.PublicationsType.findByPk(id);

      if (!publicationType)
        throw new CustomError('Not found publication type', 404, 'Not Found');

      let updatedpublicationType = await publicationType.update(obj, {
        transaction,
      });
      await transaction.commit();
      return updatedpublicationType;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = PublicationsTypesService;
