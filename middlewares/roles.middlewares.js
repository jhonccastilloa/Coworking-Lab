const ProfilesService = require('../services/profiles.service');
const { CustomError } = require('../utils/helpers');

const profilesService = new ProfilesService();
exports.isAdmin = async (request, response, next) => {
  try {
    let { id } = request.user;
    let isSuperUser = await profilesService.isAdmin(id);

    if (!isSuperUser)
      throw new CustomError(
        'You do not have permission to perfom this action.',
        403,
        'not authorization'
      );

    return next();
  } catch (error) {
    next(error);
  }
};
