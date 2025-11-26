const User = require('../models/User');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "username уже используется" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    return res.json({ success: true, result: 'вход успешен' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: error.message, место: 'сервис' });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000
    });

    return res.json({ success: true, result: 'вход успешен' });
  } catch (error) {
    return res.status(401).json({ error: error.message, location: 'сервис' });
  }
};