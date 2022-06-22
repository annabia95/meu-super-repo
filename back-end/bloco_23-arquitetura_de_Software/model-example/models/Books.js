const connection = require('./connection');

const getAll =  () => {
	return connection.execute(
		'SELECT * FROM model_example.authors;',
	);
};

const getById =  (id) => {
	return connection.execute(
		'SELECT * FROM model_example.books WHERE id= ?;',[id]
	);

};

module.exports = {
	getAll,
  getById
};