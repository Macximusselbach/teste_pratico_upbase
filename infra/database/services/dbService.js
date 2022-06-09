const mysql = require('mysql2/promise');
const configs = require('../dbConfigs.js');

async function query(sql, params) {
  const connection = await mysql.createConnection(configs.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
};