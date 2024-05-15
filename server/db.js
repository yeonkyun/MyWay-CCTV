const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tj64669801*',
  database: 'mytest'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database.');
});

module.exports = connection;
