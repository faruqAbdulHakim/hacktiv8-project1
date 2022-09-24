const { verify } = require('../helpers/jwtHelper')

function userVerify (req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    token = authHeader.split("Bearer ");
    if (!authHeader) {
      return res.status(403).json({ message: 'before request data, please login first' })
    }
    if (token.length !== 2) throw { name: 'invalidToken'};
    const { id, email } = verify(token[1]);
    req.user = { id, email };
    next()
  } catch (error) {
    res.status(401).json({ message: "invalidToken" });
  }
}

module.exports = userVerify;
