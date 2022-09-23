const User = require('./../models/User');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const register = await User.register(email, password);
    res.status(201).json({ message: 'Success', account: register });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' });
  }
}
