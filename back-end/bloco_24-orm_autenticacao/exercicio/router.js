const express = require('express');
const bookController = require('./controllers/books.controller');

const routers = express.Router();

routers.use('/books', bookController);

module.exports = routers;