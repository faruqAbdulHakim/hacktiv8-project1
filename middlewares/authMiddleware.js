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
    if (!authHeader) throw { name: 'notLogin' };

    token = authHeader.split(' ')[1];

    const { id, email } = verify(token);
    if (!id) throw { name: 'Unauthorized' };

    req.user = { id, email };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authMiddleware;
