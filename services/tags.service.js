const models = require('../database/models');
const { Op } = require('sequelize');
const { CustomError } = require('../utils/helpers');

class TagsService {
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

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true;

    const tags = await models.Tags.findAndCountAll(options);
    return tags;
  }

  async getTags() {
    let tags = await models.Tags.findAll();
    if (!tags) throw new CustomError('Not found states', 404, 'Not Found');
    return tags;
  }

  async getTag(id) {
    let tag = await models.Tags.findByPk(id);
    if (!tag) throw new CustomError('Not found Tag', 404, 'Not Found');
    return tag;
  }

  async updateTag(id, obj) {
    const transaction = await models.sequelize.transaction();
    try {
      let tag = await models.Tags.findByPk(id);
      if (!tag) throw new CustomError('Not found tag', 404, 'Not Found');
      let updatedTag = await tag.update(obj, { transaction });
      await transaction.commit();
      return updatedTag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async createTag(body) {
    const transaction = await models.sequelize.transaction();
    try {
      let newTag = await models.Tags.create(body, { transaction });
      await transaction.commit();
      return newTag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async removeTag(id) {
    const transaction = await models.sequelize.transaction();
    try {
      let tag = await models.Tags.findByPk(id);

      if (!tag) throw new CustomError('Not found tag', 404, 'Not Found');

      await tag.destroy({ transaction });

      await transaction.commit();

      return tag;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = TagsService;
