const { CustomError } = require('../utils/helpers');
const jsonwebtoken = require('jsonwebtoken');
const models = require('../database/models');
const JWT_SECRET = process.env.JWT_SECRET_WORD || 'helloWorld';

const protect = async (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization || !authorization.startsWith('Bearer'))
      throw new CustomError(
        'You are not logged in!  please log in to get access',
        404,
        'not found'
      );

    const token = authorization.split(' ')[1];
    const decoded = jsonwebtoken.verify(token, JWT_SECRET);
    console.log(decoded);
    let user = await models.Users.findByPk(decoded.id);
    if (!user)
      throw new CustomError(
        'The owner of this token it not longer available',
        401,
        'Unauthorizate'
      );

    next();
  } catch (error) {
    next(error);
    console.log(error)
  }
};
module.exports = {
  protect,
};
