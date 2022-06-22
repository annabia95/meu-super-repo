// index.js

const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
	const  [ authors ] = await Author.getById(id);
  if (authors.length === 0) return res.status(404).json({ message: 'Not found' });
	res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
	const [books] = await Books.getAll();

	res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
	const  [ books ] = await Books.getById(id);
  if (books.length === 0) return res.status(404).json({ message: 'Book not found' });
	res.status(200).json(books);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});