const ProfilesService = require('../services/profiles.service');
const { CustomError } = require('../utils/helpers');

const profilesService = new ProfilesService();
exports.isAdmin = async (request, response, next) => {
  try {
    let { id } = request.user;
    await profilesService.isAdmin(id);
    return next();
  } catch (error) {
    next(error);
  }
};
