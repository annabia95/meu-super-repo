const errorHandler = require('./errorHandler');
const validateInfo = require('./validateInfo');
const validateProductName = require('./validateProductName');
const validateSaleDate = require('./validateSaleDate');
const validateWarranty = require('./validateWarranty');

module.exports = {
  errorHandler,
  validateInfo,
  validateProductName,
  validateSaleDate,
  validateWarranty
}