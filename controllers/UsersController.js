const User = require('../models/User');
const bcrypt = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwtHelper');

class UsersController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {import('express').NextFunction} next
   */
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: 'BadRequest' };

      const cekEmail = await User.login(email, password);

      if (email === cekEmail.email) throw { name: 'EmailExist' };

      if (password.length < 8) throw { name: 'reqPassword' };

      const register = await User.register(email, password);

      res
        .status(201)
        .json({ message: 'Register Success', account: register.email });
    } catch (error) {
      next(error);
    }
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {import('express').NextFunction} next
   */
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: 'BadRequest' };

      const login = await User.login(email, password);

      if (!login.email) throw { name: 'UserNotFound' };

      if (!bcrypt.comparePassword(password, login.password))
        throw { name: 'WrongPassword' };

      const token = sign(
        {
          id: login.id,
          email: login.email,
        },
        { expiresIn: '1d' }
      );
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
