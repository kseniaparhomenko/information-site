const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); // Node інструменти для MongoDB
const config = require('./config/db'); // Mongoose Config
const path = require('path'); // Пакет NodeJS для шляхів до файлів

// Підключення до бази даних
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Не підключено до бази даних: ', err);
  } else {
    console.log('Підключено до бази даних: ' + config.db);
  }
});

//надання статичноо каталогу для інтерфейсу
app.use(express.static(__dirname + '/front-end/dist/front-end'));

// Зєднання з  Angular 2 Index.html
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname + '/front-end/dist/front-end/index.html'));
});

// Запуск сервера 
app.listen(3000, () => {
  console.log('Сервер був запущений по порті: 3000');
});