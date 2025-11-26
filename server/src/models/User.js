const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  theme: { type: String, default: 'light' }
});

module.exports = mongoose.model('User', userSchema);