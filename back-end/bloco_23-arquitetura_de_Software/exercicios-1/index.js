const express = require('express');

const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/user', middlewares.usersValidation);
app.get('/user', middlewares.getAllValidation);
app.get('/user/:id', middlewares.findByIdValidation);
app.put('/user/:id', middlewares.updatedValidation);

app.use(middlewares.errorValidation);


const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

