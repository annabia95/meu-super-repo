const express = require('express');

const crypto = require('crypto');

const middlewares = require('./middlewares');

const api = express();

api.use(express.json());

api.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }

    const token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

api.post('/sales', 
  middlewares.validateInfo, 
  middlewares.validateProductName,
  middlewares.validateSaleDate,
  middlewares.validateWarranty, 
  (req,res) => {

    return res.status(201).json({ "message": "Venda cadastrada com sucesso" });
})



api.listen(3000, () => {
  console.log('Subiu na porta 3000');
})