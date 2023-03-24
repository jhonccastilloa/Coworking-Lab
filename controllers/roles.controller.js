const RolesService = require('../services/roles.service');
const { getPagination, getPagingData } = require('../utils/helpers');
const rolesServices = new RolesService();

exports.getAllRoles = async (req, res, next) => {
  try {
    const query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const roles = await rolesServices.findAndCount(query);
    const result = getPagingData(roles, page, limit);
    return res.json({ results: result });
  } catch (error) {
    next(error);
  }
};
