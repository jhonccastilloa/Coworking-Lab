const UsersService = require('../services/users.service');
const { CustomError } = require('../utils/helpers');
const usersService = new UsersService();

const protectAccountOwner = async (request, response, next) => {
  const { id: idUserSession } = request.user;
  const { id } = request.params;
  try {
    const user = await usersService.getUser(id);
    if (user.id !== idUserSession)
      throw new CustomError(
        'You do not own this account',
        401,
        'Not Permission'
      );
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  protectAccountOwner,
};
