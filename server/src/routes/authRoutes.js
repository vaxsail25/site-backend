const express = require('express');
const path = require('path');
const router = express.Router();

const redirectIfAuth = require('../middleware/redirectIfAuth');
const authController = require('../controllers/authController'); // твой контроллер для логина и регистрации

// Страница логина — запрещаем залогиненным заходить
router.get('/login', redirectIfAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../frontend/dist', 'index.html'));
});

// Логин (POST)
router.post('/login', redirectIfAuth, authController.login);

// Страница регистрации — запрещаем залогиненным заходить
router.get('/register', redirectIfAuth, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../frontend/dist', 'index.html'));
});

// Регистрация (POST)
router.post('/register', redirectIfAuth, authController.register);

module.exports = router;
