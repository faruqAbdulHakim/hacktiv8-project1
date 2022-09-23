const User = require('./../models/User');

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
    res.status(200).json({ message: 'Success, You are login', login })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}