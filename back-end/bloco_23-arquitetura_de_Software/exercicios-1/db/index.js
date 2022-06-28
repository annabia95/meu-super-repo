const mysql = require('mysql2/promise');

// Criando conexão com o banco de dados
const connection = mysql.createPool({
    host: process.env.DB_HOST || "localhost", // usa process.env para Docker
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "users_crud"
});

module.exports = connection;