const express = require('express');
const app = express();

app.use(express.json());

const atividade_1 = require('./routers/atividade_1');

app.use('/user', atividade_1);

const PORT = '3001';

app.listen(PORT, () => {
  console.log('Online');
});