const { Data } = require("../models");

const getBooks = () => {
  return Data.findAll();
};

const getBooksId = (id) => {
  return Data.findByPk(id);
};

const createBooks = ({ title, author, pageQuantity }) => {
  return Data.create({
    title,
    author,
    pageQuantity,
  });
};

const updateBooks = ({ title, author, pageQuantity }, { id }) => {
  return Data.update({
    title,
    author,
    pageQuantity,
  }, { where: { id } },);
};

const deleteBooks = ({ id }) => {
  return Data.destroy({ where: { id } });
};

module.exports = {
  getBooks,
  getBooksId,
  createBooks,
  updateBooks,
  deleteBooks
};
