const User = require('./../models/User');
const hashPassword = require('./../helpers/bcrypt');
const { sign } = require('./../helpers/jwtHelper');

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const cekEmail = await User.login(email, password);

    if (email === cekEmail.email) {
      throw { name: 'EmailExist' }
    }

    if (password.length < 8) {
      throw { name: 'reqPassword' }
    }

    const register = await User.register(email, password);
    res.status(201).json({ 
      message: 'Register Success',
      account: register.email }
      );
  } catch (error) {
    next(error);
  }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await User.login(email, password);

    if (!login.email) {
      throw { name: 'UserNotFound' }
    };

    if (!hashPassword.comparePassword(password, login.password)) {
      throw { name: 'WrongPassword' }
    };

    const token = sign({
      id: login.id,
      email: login.email
    }, { expiresIn: '1d' })
    res.status(200).json({ message: 'Success, You are login', token })
  } catch (error) {
    next(error);
  }
}
