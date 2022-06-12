const express = require('express');
const api = express();


const { readFile, writeFile } = require('./database');

api.use(express.json());



api.get('/simpsons', async(_req,res) => {
 
  try {
  const data = await readFile('./simpsons.json');
  res.status(200).json(data);
  }
  catch(error) {
  res.status(500).json( { message: 'internal error server'  });
  }

})


api.get('/simpsons/:id', async(req,res) => {
  const { id } = req.params;

  const data = await readFile('./simpsons.json');
  console.log(data);

  const dataId = data.find((elem) => elem.id === id );

 if(!dataId) {
    return res.status(404).json( { message: 'simpson not found'  });
  }
    return res.status(200).json(dataId);
})

api.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await readFile('./simpsons.json');

  
  if (simpsons.some((character) => character.id === id)) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });

  await writeFile('./simpsons.json', JSON.stringify(simpsons));

  return res.status(204).end();
});


api.get('/ping', (_req,res) => {

  res.status(200).json({ message: 'pong' })
})

api.post('/hello', (req,res) => {

  const { name } = req.body;
  res.status(200).json( { "message": `Hello, ${name}!` } );
})

api.post('/greetings', (req,res) => {
  const { name, age } = req.body;

  if(Number(age) > 17) {
    res.status(200).json({ "message": `Hello, ${name}!` } );
  }

  res.status(401).json( { "message": "Unauthorized" } );
})

api.put('/users/:name/:age', (req,res) => {
  const { name, age } = req.params;

  res.status(201).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });

})


const PORT = 3000;

api.listen(PORT, () => {
  console.log('Subiu na porta 3000')
})