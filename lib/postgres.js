const { Client } = require('pg');

async function getConnection() {
  const cliente = new Client({
    host: 'localhost',
    posty: 5432,
    user: 'brandondev',
    password: 'admin123',
    database: 'my_store',
  });
  await cliente.connect();
  return cliente;
}

module.exports = getConnection;
