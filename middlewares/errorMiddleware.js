/**
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {import('express').NextFunction} next
 */
function errorMiddleware(error, req, res, next) {
  let code;
  let message;

  switch (error.name) {
    case 'EmailExist':
      code = 400;
      message = "Can't Register: Email Already Exist";
      break;
    case 'JsonWebTokenError':
      code = 401;
      message = 'Invalid Token';
      break;
    case 'InvalidToken':
      code = 401;
      message = 'Invalid Token';
      break;
    case 'Unauthorized':
      code = 401;
      message = 'Unauthorized';
      break;
    case 'UserNotFound':
      code = 401;
      message = 'Wrong Email/Password';
      break;
    case 'Forbidden':
      code = 403;
      message = 'Forbidden';
      break;
    default:
      code = 500;
      message = 'Internal Server Error';
      break;
  }
  res.status(code).json({ message });
}

module.exports = errorMiddleware;
