const models = require('../database/models');
const { Op } = require('sequelize');
const { CustomError } = require('../utils/helpers');

class ProfilesService {
  constructor() {}

  //Return Instance if we do not converted to json (or raw:true)
  async getProfileOr404(id) {
    let profile = await models.Profiles.findByPk(id, { raw: true });
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found');
    return profile;
  }

  //Return not an Instance raw:true | we also can converted to Json instead
  async getProfile(id) {
    let profile = await models.Profiles.findByPk(id);
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found');
    return profile;
  }

  async findProfileByUserID(user_id) {
    let profile = await models.Profiles.findOne(
      { where: { user_id } },
      { raw: true }
    );
    if (!profile) throw new CustomError('Not found profile', 404, 'Not Found');
    return profile;
  }

  async isAdmin(user_id) {
    const adminRole = await models.Roles.findOne({
      where: {
        name: 'admin',
      },
      attributes: ['id', 'name'],
    });
    if (!adminRole)
      throw new CustomError(
        'Record is missing in the data base',
        500,
        'Not Found Core Record (Role)'
      );
    const userAdmin = await models.Profiles.findOne({
      where: {
        user_id,
        role_id: adminRole.id,
      },
    });
    if (!userAdmin)
      throw new CustomError(
        'You do not have permission to perfom this action.',
        403,
        'not authorization'
      );
  }
}

module.exports = ProfilesService;
