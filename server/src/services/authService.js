const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async ({ username, password }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('username уже используется');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashedPassword });
  await user.save();
};

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Пользователь не найден');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Неверный пароль');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return token;
};
