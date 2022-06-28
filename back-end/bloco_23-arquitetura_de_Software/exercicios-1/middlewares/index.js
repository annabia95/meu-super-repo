const usersValidation = require('./usersValidation');
const errorValidation = require('./error');
const getAllValidation = require('./getAllValidation');
const findByIdValidation = require('./findByIdValidation');
const updatedValidation = require('./updateValidation')

module.exports = {
  usersValidation,
  errorValidation,
  getAllValidation,
  findByIdValidation,
  updatedValidation
};