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
    case 'notLogin':
      code = 403;
      message = 'before request data, please login first';
      break;
    case 'PageNotFound':
      code = 404;
      message = 'Oops... nothing here';
      break;
    case 'ErrNotFound':
      code = 404;
      message = 'data not found';
      break;
    default:
      code = 500;
      message = 'Internal Server Error';
      break;
  }
  res.status(code).json({ message });
}

module.exports = errorMiddleware;
