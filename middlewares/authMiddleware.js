const { verify } = require('../helpers/jwtHelper')

exports.userVerify = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
      return res.status(403).json({ message: 'before request data, please login first' })
    }
    const token = authHeader.split(' ')[1]
    if (token.length !== 2) {
      return res.status(400).json({ message: 'InvalidToken' })
    }
    const { id, name } = verify(token)
    req.user = { id, name }
    next()
  } catch (error) {
    next(error.name)
  }
}
