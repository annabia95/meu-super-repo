const connection = require('../db');
const Joi = require('joi');

const userSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()})

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
  // e sem o campo password
  return {
    id,
    firstName,
    lastName,
    email,
  };
  }
  
  // Função responsável por criar o usuário no banco de dados
  function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
  // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
  }

  function findAll() {
    // Mais uma vez, chamamos connection.execute para executar nossa query.
    return connection.execute('SELECT * from users;')
      // Passamos cada resultado pela função de formatação
      .then(([results]) => results.map(formatUser));
  }

  const getById = (id) => {
  	// Realizamos uma consulta buscando o usuário por ID
	return connection.execute('SELECT * FROM users WHERE id = ?', [id])
  .then(([results]) => {
  // caso encontre o usuário pelo id, ele será o 1º item no result.
  // assim podemos formatá-lo e retornar os dados
  if (results[0]) return formatUser(results[0]);
  // caso contrário retorne nulo
  return null;
  });
};

async function updateUser(id, { firstName, lastName, email, password }) {
	// Primeiro, executamos a query de atualização
	const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

	await connection.execute(query, [firstName, lastName, email, password, id]);

	// Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos.
	// Não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe,
	// já que `findById` já faz isso pra nós.
	return getById(id);
}

function isValid(userData) {
	return userSchema.validate(userData);
}

  module.exports = { formatUser, create, findAll, getById, updateUser, isValid};