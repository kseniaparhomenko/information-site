const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/db'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Не підключено до бази даних: ', err);
  } else {
    console.log('Підключено до бази даних: ' + config.db);
  }
});

// Provide static directory for frontend
app.use(express.static(__dirname + '/front-end/dist/front-end'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname + '/front-end/dist/front-end/index.html'));
});

// Start Server: Listen on port 3000
app.listen(3000, () => {
  console.log('Сервер був запущений по порті: 3000');
});