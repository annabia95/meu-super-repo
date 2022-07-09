const express = require('express');

const database = require('./orders.json');

const { readFile, writeFile } = require('./database');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).send("OK"));

app.get('/orders',async (_req, res) => {
  const data = await readFile('./orders.json');

  res.status(200).json(data);
});

app.get('/orders/:id', async (req, res) => {
  const { id } = req.params;

  const data = await readFile('./orders.json');

  const order = data.find((elem) => elem.id === +id)

  res.status(200).json(order);
});

app.post('/orders', async (req, res) => {
  const data = req.body;

  const newOrder = {
    id: database.length + 1,
    ...data
  }

  await writeFile('./orders.json', JSON.stringify([...database, newOrder]));

  res.end();
});


app.listen(3000);