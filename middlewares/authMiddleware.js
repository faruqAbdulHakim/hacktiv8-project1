const { verify } = require('../helpers/jwtHelper');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import('express').NextFunction} next
 */
function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw { name: 'Unauthorized' };

    token = authHeader.split('Bearer ');
    if (token.length !== 2) throw { name: 'InvalidToken' };

    const { id } = verify(token[1]);
    if (!id) throw { name: 'Unauthorized' };

    req.user = { id };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authMiddleware;
