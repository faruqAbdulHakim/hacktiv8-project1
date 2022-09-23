const User = require('./../models/User');
const hashPassword = require('./../helpers/bcrypt');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const register = await User.register(email, password);
    res.status(201).json({ message: 'Success', account: register });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await User.login(email, password);
    if (!login.email) return res.status(400).json({ msg: 'User Not Found' });
    if (!hashPassword.comparePassword(password, login.password)) return res.status(400).json({ msg: 'Wrong Password' });
    res.status(200).json({ message: 'Success, You are login', login })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
