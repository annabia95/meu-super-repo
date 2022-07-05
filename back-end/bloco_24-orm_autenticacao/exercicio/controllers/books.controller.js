const express = require ('express');
const booksRouter = express.Router();
const serviceBooks = require('../services/books.service');

booksRouter.get('/', async (req, res) => {
  const response = await serviceBooks.getBooks();
  return res.status(200).json(response);
})

booksRouter.post('/', async (req, res) => {
  const response = await serviceBooks.createBooks(req.body);
  return res.status(201).json(response);
})

booksRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const response = await serviceBooks.getBooksId(id);
  if (!response) return res.status(404).json({ "message": "Book not found" });
  return res.status(200).json(response);
})

booksRouter.put('/:id', async (req, res) => {
  try {
    const [updateBook] = await serviceBooks.updateBooks(req.body, req.params);
    if(!updateBook) return res.status(404).json({ message: 'Book not found!' });
    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

booksRouter.delete('/:id', async (req, res) => {
  try {
    const deleteBooks = await serviceBooks.deleteBooks(req.params)

    console.log(deleteBooks);// confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Successfully deleted book!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = booksRouter;