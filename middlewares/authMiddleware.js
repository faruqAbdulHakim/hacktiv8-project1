const { verify } = require('../helpers/jwtHelper')

function userVerify (req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    token = authHeader.split("Bearer ");
    if (!authHeader) throw { name: 'notLogin'};
    if (token.length !== 2) throw { name: 'invalidToken'};
    const { id, email } = verify(token[1]);
    if (!user) throw { name: 'Unauthorized' };
    req.user = { id, email };
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = userVerify;
