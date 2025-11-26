require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Подключаем React-билд как статические файлы
app.use(express.static(path.join(__dirname, '../frontend/dist')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB подключена'))
  .catch(err => console.error('❌ Ошибка подключения к MongoDB:', err.message));

// Любой путь, который не совпадает с API, отдаём React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Роуты для API
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${process.env.PORT}`);
});
