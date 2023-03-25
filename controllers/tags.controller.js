const TagsService = require('../services/tags.service');
const { getPagination, getPagingData } = require('../utils/helpers');
const tagsService = new TagsService();

exports.findTags = async (req, res, next) => {
  try {
    const query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const states = await tagsService.findAndCount(query);
    const result = getPagingData(states, page, limit);
    return res.status(200).json({ results: result });
  } catch (error) {
    next(error);
  }
};

exports.findTag = async (request, response, next) => {
  const { id } = request.params;
  try {
    const tag = await tagsService.getTag(id);
    return response.status(200).json({ results: { message: 'ok', tag } });
  } catch (error) {
    next(error);
  }
};

exports.editTag = async (req, res, next) => {
  try {
    let { id } = req.params;
    let { body } = req;
    let tag = await tagsService.updateTag(id, body);
    return res.json({ results: tag });
  } catch (error) {
    next(error);
  }
};
